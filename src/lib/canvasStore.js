// Client-side stand-in for a moderation database. Submissions are written to
// localStorage with the visitor's real name/email always retained (for admin
// verification) while the public wall only ever reads the blinded
// displayName and only surfaces entries an admin has flipped to approved.

const STORAGE_KEY = "canvas-submissions";

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeAll(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function submitCanvasEntry({ name, email, city, message, anonymous, attachment }) {
  const entries = readAll();
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    email,
    city: city || "",
    message,
    anonymous,
    displayName: anonymous ? "Anonymous" : name,
    attachment: attachment || null,
    approved: false,
    createdAt: new Date().toISOString(),
  };
  entries.push(entry);
  writeAll(entries);
  return entry;
}

export function getApprovedCanvasEntries() {
  return readAll()
    .filter((entry) => entry.approved === true)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
