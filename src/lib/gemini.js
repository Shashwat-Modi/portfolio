// Structural client for the Gemini API. Reads VITE_GEMINI_API_KEY from the
// local .env file — set it to a Google AI Studio key to switch the chatbot
// from canned placeholder responses to live Gemini calls. No other wiring
// required.

const GEMINI_MODEL = "gemini-2.0-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const PERSONA_PROMPT =
  "You are Shashwat Modi's portfolio assistant: a data scientist's AI persona, warm but precise, fluent in his projects, journey, and experience. Answer as if you know his work firsthand.";

const PLACEHOLDER_RESPONSES = [
  "I'm running in placeholder mode right now — once a Gemini API key is wired in, I'll answer this from Shashwat's actual project data.",
  "Good question. For now I can only offer a scripted response, but ask me about his Cornell work, the fatigue-modeling project, or his martial arts journey once I'm fully connected.",
  "I'd love to dig into that for you — I just need a Gemini API key from Google AI Studio to move past these canned replies.",
];

function getApiKey() {
  return import.meta.env.VITE_GEMINI_API_KEY;
}

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

function buildRequestBody(message) {
  return {
    contents: [{ parts: [{ text: `${PERSONA_PROMPT}\n\nVisitor: ${message}` }] }],
  };
}

async function fetchGeminiResponse(message, apiKey) {
  const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildRequestBody(message)),
  });

  if (!response.ok) {
    throw new Error(`Gemini request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? pickPlaceholder(message);
}

export async function askGemini(message) {
  const apiKey = getApiKey();

  if (!apiKey) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return pickPlaceholder(message);
  }

  return fetchGeminiResponse(message, apiKey);
}
