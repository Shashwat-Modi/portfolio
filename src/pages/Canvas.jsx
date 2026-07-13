import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { canvasPageData } from "../data/contentData";
import {
  fetchApprovedFeed,
  buildThreadedFeed,
  submitPost,
  submitComment,
  uploadAttachment,
  generateAnonymousHandle,
} from "../lib/canvasFeed";

const initialState = { name: "", email: "", location: "", message: "", anonymous: false };
const initialReplyState = { name: "", email: "", message: "" };

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const inputClass =
  "mt-2 w-full border border-temple-grey bg-transparent px-4 py-3 font-serif text-base font-medium text-dark-night placeholder:text-dark-night/40 focus:border-dark-night focus:outline-none";
const labelClass = "font-label text-xs font-light uppercase tracking-[0.2em] text-charcoal";
const errorClass = "mt-1.5 font-serif text-sm font-semibold text-dark-night";

function CommentReplyForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(initialReplyState);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!form.message.trim()) {
      setError("Please write a reply.");
      return;
    }
    onSubmit({
      authorName: form.name.trim() || generateAnonymousHandle(),
      authorEmail: form.email.trim(),
      content: form.message.trim(),
    });
    setForm(initialReplyState);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-3 flex flex-col gap-2">
      <input
        type="text"
        value={form.name}
        onChange={handleChange("name")}
        placeholder="Name (optional)"
        className={`${inputClass} py-2`}
      />
      <input
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        placeholder="you@example.com"
        className={`${inputClass} py-2`}
      />
      <textarea
        rows={3}
        value={form.message}
        onChange={handleChange("message")}
        placeholder="Write your reply…"
        className={`${inputClass} resize-none py-2`}
      />
      {error && <p className={errorClass}>{error}</p>}
      <div className="flex gap-3">
        <button
          type="submit"
          className="border border-dark-night/30 px-4 py-1.5 font-serif text-sm font-medium text-dark-night transition-colors duration-200 hover:border-dark-night hover:bg-dark-night hover:text-snowfall"
        >
          Reply
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="font-serif text-sm font-medium text-dark-night/50 hover:text-dark-night"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function CommentNode({ comment, postId, onReply, depth = 0 }) {
  const [replying, setReplying] = useState(false);

  const handleReply = (payload) => {
    onReply({ postId, parentCommentId: comment.id, ...payload });
    setReplying(false);
  };

  return (
    <div className={depth > 0 ? "mt-4 border-l border-temple-grey/60 pl-5" : "mt-4"}>
      <div className="flex flex-wrap items-baseline gap-x-2">
        <p className="font-serif text-sm font-semibold text-dark-night">{comment.commenter_name}</p>
        <p className="font-label text-xs uppercase tracking-[0.15em] text-charcoal/60">{formatDate(comment.created_at)}</p>
        {comment.pending && (
          <span className="font-label text-[10px] uppercase tracking-[0.15em] text-charcoal/60">Pending review</span>
        )}
      </div>
      <p className="mt-1 text-base leading-relaxed text-dark-night">{comment.content}</p>

      {replying ? (
        <CommentReplyForm onSubmit={handleReply} onCancel={() => setReplying(false)} />
      ) : (
        <button
          type="button"
          onClick={() => setReplying(true)}
          className="mt-2 font-label text-xs font-medium uppercase tracking-[0.15em] text-dark-night/60 hover:text-dark-night"
        >
          Reply
        </button>
      )}

      {comment.children?.length > 0 && (
        <div>
          {comment.children.map((child) => (
            <CommentNode key={child.id} comment={child} postId={postId} onReply={onReply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Canvas() {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshFeed = async () => {
    const { posts, comments } = await fetchApprovedFeed();
    setFeed(buildThreadedFeed({ posts, comments }));
  };

  useEffect(() => {
    refreshFeed().finally(() => setLoading(false));
  }, []);

  const handleChange = (field) => (e) => {
    const value = field === "anonymous" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] ?? null;
    if (selected && selected.size > canvasPageData.maxAttachmentBytes) {
      setErrors((prev) => ({ ...prev, attachment: "Attachment must be 500KB or smaller." }));
      e.target.value = "";
      setFile(null);
      return;
    }
    setErrors((prev) => ({ ...prev, attachment: undefined }));
    setFile(selected);
  };

  const validate = () => {
    const next = {};
    if (!form.email.trim() || !isValidEmail(form.email)) next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Please write a message.";
    setErrors((prev) => ({ ...prev, ...next, attachment: prev.attachment }));
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const authorName = form.anonymous || !form.name.trim() ? generateAnonymousHandle() : form.name.trim();

    const imageUrl = file ? await uploadAttachment(file) : null;

    const post = await submitPost({
      authorName,
      authorEmail: form.email.trim(),
      content: form.message.trim(),
      location: form.location.trim(),
      imageUrl,
    });

    posthog.capture("canvas_entry_submitted", {
      anonymous: form.anonymous,
      has_attachment: !!file,
      has_location: !!form.location.trim(),
    });

    setFeed((prev) => [{ ...post, comments: [] }, ...prev]);
    setSubmitted(true);
    setForm(initialState);
    setFile(null);
  };

  const handleReply = async ({ postId, parentCommentId, authorName, authorEmail, content }) => {
    await submitComment({ postId, parentCommentId, authorName, authorEmail, content });
    posthog.capture("canvas_reply_submitted", { post_id: String(postId), has_parent: !!parentCommentId });
    refreshFeed();
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-dark-night sm:text-4xl md:text-5xl">{canvasPageData.heading}</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-dark-night/70">{canvasPageData.message}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-12 flex flex-col gap-6">
        <div>
          <label htmlFor="canvas-name" className={labelClass}>
            Name <span className="normal-case tracking-normal text-dark-night/50">(optional — leave blank to post anonymously)</span>
          </label>
          <input
            id="canvas-name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="canvas-email" className={labelClass}>
            Email <span className="normal-case tracking-normal text-dark-night/50">(kept private, never shown)</span>
          </label>
          <input
            id="canvas-email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className={inputClass}
            placeholder="you@example.com"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="canvas-location" className={labelClass}>
            Location / City <span className="normal-case tracking-normal text-dark-night/50">(optional)</span>
          </label>
          <input
            id="canvas-location"
            type="text"
            value={form.location}
            onChange={handleChange("location")}
            className={inputClass}
            placeholder="City"
          />
        </div>

        <div>
          <label htmlFor="canvas-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="canvas-message"
            rows={5}
            value={form.message}
            onChange={handleChange("message")}
            className={`${inputClass} resize-none`}
            placeholder="Leave your print…"
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>

        <div>
          <label htmlFor="canvas-attachment" className={labelClass}>
            Photo Attachment <span className="normal-case tracking-normal text-dark-night/50">(optional, max 500KB)</span>
          </label>
          <input
            id="canvas-attachment"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 block w-full font-serif text-sm font-medium text-dark-night/70"
          />
          {errors.attachment && <p className={errorClass}>{errors.attachment}</p>}
        </div>

        <label className="flex items-center gap-3 font-serif text-base font-medium text-dark-night">
          <input
            type="checkbox"
            checked={form.anonymous}
            onChange={handleChange("anonymous")}
            className="h-4 w-4 border-temple-grey accent-dark-night"
          />
          Post anonymously to public wall
        </label>

        <button
          type="submit"
          className="self-start border border-dark-night/30 px-6 py-2.5 font-serif text-base font-medium tracking-wide text-dark-night opacity-70 transition-all duration-200 hover:border-dark-night hover:bg-dark-night hover:text-snowfall hover:opacity-100"
        >
          Submit to the Canvas
        </button>

        {submitted && (
          <p className="font-serif text-sm font-medium text-dark-night">
            Thank you — your entry has been submitted for review before it joins the wall.
          </p>
        )}
      </form>

      <div className="mt-20 border-t border-temple-grey pt-12">
        <h2 className="font-serif text-xl text-dark-night sm:text-2xl">Shared Thoughts</h2>
        {loading ? (
          <p className="mt-4 text-base leading-relaxed text-dark-night/70">Loading the wall…</p>
        ) : feed.length === 0 ? (
          <p className="mt-4 text-base leading-relaxed text-dark-night/70">
            Looking forward to building a community here. Share your ideas above to start the dialogue!
          </p>
        ) : (
          <div className="mt-8 flex flex-col gap-10">
            {feed.map((post) => (
              <div key={post.id} className="border-b border-temple-grey/60 pb-8">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <p className="font-serif text-sm uppercase tracking-[0.2em] text-charcoal">
                    {post.author_name}
                    {post.location ? ` · ${post.location}` : ""}
                  </p>
                  <p className="font-label text-xs uppercase tracking-[0.15em] text-charcoal/60">{formatDate(post.created_at)}</p>
                  {post.pending && (
                    <span className="font-label text-[10px] uppercase tracking-[0.15em] text-charcoal/60">Pending review</span>
                  )}
                </div>
                <p className="mt-3 text-base leading-relaxed text-dark-night">{post.content}</p>
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt=""
                    className="mt-4 max-h-80 w-full rounded-lg border border-temple-grey object-cover"
                  />
                )}

                <div className="mt-4">
                  {post.comments.map((comment) => (
                    <CommentNode key={comment.id} comment={comment} postId={post.id} onReply={handleReply} />
                  ))}
                </div>

                <CommentReplyForm
                  onSubmit={(payload) => handleReply({ postId: post.id, parentCommentId: null, ...payload })}
                  onCancel={() => {}}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
