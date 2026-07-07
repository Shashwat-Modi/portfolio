// Thin client for the floating chatbot. Point GEMINI_API_KEY at a Google AI
// Studio key (via VITE_GEMINI_API_KEY) to switch from canned responses to
// live Gemini calls — no other wiring required.

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.0-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const PERSONA_PROMPT =
  "You are Shashwat Modi's portfolio assistant: a data scientist's AI persona, warm but precise, fluent in his projects, journey, and experience. Answer as if you know his work firsthand.";

const PLACEHOLDER_RESPONSES = [
  "I'm running in placeholder mode right now — once a Gemini API key is wired in, I'll answer this from Shashwat's actual project data.",
  "Good question. For now I can only offer a scripted response, but ask me about his Cornell work, the fatigue-modeling project, or his martial arts journey once I'm fully connected.",
  "I'd love to dig into that for you — I just need a Gemini API key from Google AI Studio to move past these canned replies.",
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function pickPlaceholder(message) {
  const index = Math.abs(hashString(message)) % PLACEHOLDER_RESPONSES.length;
  return PLACEHOLDER_RESPONSES[index];
}

export async function askGemini(message) {
  if (!GEMINI_API_KEY) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return pickPlaceholder(message);
  }

  const response = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${PERSONA_PROMPT}\n\nVisitor: ${message}` }] }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? pickPlaceholder(message);
}
