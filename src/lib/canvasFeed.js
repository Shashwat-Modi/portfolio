// Live Canvas feed pipeline: reads approved posts/comments from Supabase and
// layers a localStorage "pending" cache on top so a visitor's own
// just-submitted posts and replies render instantly (and survive a refresh)
// even before an admin has approved them — mirroring the moderation queue
// pattern used elsewhere in this project (see the old canvasStore.js).
import { supabase } from "../supabaseClient";

const PENDING_POSTS_KEY = "canvas-pending-posts";
const PENDING_COMMENTS_KEY = "canvas-pending-comments";
const ATTACHMENT_BUCKET = "canvas-attachments";

const HANDLE_NOUNS = ["Scribe", "Scholar", "Reader", "Thinker"];

export function generateAnonymousHandle() {
  const noun = HANDLE_NOUNS[Math.floor(Math.random() * HANDLE_NOUNS.length)];
  const code = Math.floor(100 + Math.random() * 900);
  return `Anonymous ${noun} #${code}`;
}

function readCache(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCache(key, entries) {
  window.localStorage.setItem(key, JSON.stringify(entries));
}

export function getPendingPosts() {
  return readCache(PENDING_POSTS_KEY);
}

export function getPendingComments() {
  return readCache(PENDING_COMMENTS_KEY);
}

export async function uploadAttachment(file) {
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${file.name}`;
  const { error } = await supabase.storage.from(ATTACHMENT_BUCKET).upload(path, file);
  if (error) {
    console.error("[Canvas Attachment Upload Error]:", error);
    return null;
  }
  const { data } = supabase.storage.from(ATTACHMENT_BUCKET).getPublicUrl(path);
  return data?.publicUrl ?? null;
}

export async function fetchApprovedFeed() {
  const [{ data: posts, error: postsError }, { data: comments, error: commentsError }] = await Promise.all([
    supabase
      .from("public_canvas_feed")
      .select("id, created_at, author_name, content, image_url, location, moderation_status")
      .eq("moderation_status", "approved")
      .order("created_at", { ascending: false }),
    supabase
      .from("canvas_comments")
      .select("id, post_id, parent_comment_id, created_at, commenter_name, content, moderation_status")
      .eq("moderation_status", "approved")
      .order("created_at", { ascending: false }),
  ]);

  if (postsError) console.error("[Canvas Feed Fetch Error]:", postsError);
  if (commentsError) console.error("[Canvas Comments Fetch Error]:", commentsError);

  return { posts: posts ?? [], comments: comments ?? [] };
}

export async function submitPost({ authorName, authorEmail, content, location, imageUrl }) {
  const localId = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const optimisticPost = {
    id: localId,
    created_at: new Date().toISOString(),
    author_name: authorName,
    content,
    location: location || "",
    image_url: imageUrl || null,
    moderation_status: "pending",
    pending: true,
  };

  const pending = getPendingPosts();
  pending.unshift(optimisticPost);
  writeCache(PENDING_POSTS_KEY, pending);

  try {
    const { data, error } = await supabase
      .from("public_canvas_feed")
      .insert({
        author_name: authorName,
        author_email: authorEmail,
        display_handle: authorName,
        content,
        location: location || "",
        image_url: imageUrl || null,
        moderation_status: "pending",
      })
      .select("id")
      .single();

    if (error) {
      console.error("[Canvas Post Submit Error]:", error);
    } else if (data?.id != null) {
      // Swap the placeholder id for the real row id so replies made against
      // this still-pending post carry a valid foreign key.
      const refreshed = getPendingPosts().map((p) => (p.id === localId ? { ...p, id: data.id } : p));
      writeCache(PENDING_POSTS_KEY, refreshed);
      optimisticPost.id = data.id;
    }
  } catch (error) {
    console.error("[Canvas Post Submit Exception]:", error);
  }

  return optimisticPost;
}

export async function submitComment({ postId, parentCommentId, authorName, authorEmail, content }) {
  const localId = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const optimisticComment = {
    id: localId,
    post_id: postId,
    parent_comment_id: parentCommentId ?? null,
    created_at: new Date().toISOString(),
    commenter_name: authorName,
    content,
    moderation_status: "pending",
    pending: true,
  };

  const pending = getPendingComments();
  pending.unshift(optimisticComment);
  writeCache(PENDING_COMMENTS_KEY, pending);

  try {
    const { data, error } = await supabase
      .from("canvas_comments")
      .insert({
        post_id: postId,
        parent_comment_id: parentCommentId ?? null,
        commenter_name: authorName,
        commenter_email: authorEmail,
        content,
        moderation_status: "pending",
      })
      .select("id")
      .single();

    if (error) {
      console.error("[Canvas Comment Submit Error]:", error);
    } else if (data?.id != null) {
      // Swap the placeholder id for the real row id so nested replies to
      // this still-pending comment carry a valid foreign key.
      const refreshed = getPendingComments().map((c) => (c.id === localId ? { ...c, id: data.id } : c));
      writeCache(PENDING_COMMENTS_KEY, refreshed);
      optimisticComment.id = data.id;
    }
  } catch (error) {
    console.error("[Canvas Comment Submit Exception]:", error);
  }

  return optimisticComment;
}

function buildCommentTree(comments, postId) {
  const forPost = comments.filter((c) => String(c.post_id) === String(postId));
  const byParent = new Map();
  for (const comment of forPost) {
    const key = comment.parent_comment_id == null ? "root" : String(comment.parent_comment_id);
    if (!byParent.has(key)) byParent.set(key, []);
    byParent.get(key).push(comment);
  }

  function attachChildren(comment) {
    const children = byParent.get(String(comment.id)) ?? [];
    return { ...comment, children: children.map(attachChildren) };
  }

  return (byParent.get("root") ?? []).map(attachChildren);
}

// Merges live-approved rows with this browser's own pending submissions, then
// assembles each post's recursive comment tree.
export function buildThreadedFeed({ posts, comments }) {
  const pendingPosts = getPendingPosts();
  const pendingComments = getPendingComments();

  const allPosts = [...pendingPosts, ...posts];
  const allComments = [...pendingComments, ...comments];

  return allPosts.map((post) => ({
    ...post,
    comments: buildCommentTree(allComments, post.id),
  }));
}
