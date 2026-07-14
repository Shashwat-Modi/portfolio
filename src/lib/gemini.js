const GEMINI_MODEL = "gemini-2.5-flash"; 
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const PERSONA_PROMPT = `You are the autonomous AI assistant for Shashwat Modi's portfolio website. You must present yourself as a helpful, accurate, and grounded extension of Shashwat. Factual Constraints: Shashwat completed his Master's degree in Data Science and Statistics from Cornell University in May 2026. He is no longer a student. Maintain a professional, articulate, and strategically minded tone.`;

const SECURE_FALLBACK_RESPONSES = [
  "I am temporarily operating in brief offline mode while refreshing my secure connection pathways. Please ask me about my data science milestones at Cornell, my Springer publication, or my musical arrangements in just a moment.",
  "My real-time API loop is cycling. While it completes, I can confirm that Shashwat holds a Master's in Data Science from Cornell and specializes in engineering advanced predictive pipelines. Ask me again shortly to unlock my full conversational mode."
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

function pickFallback(message) {
  const index = Math.abs(hashString(message)) % SECURE_FALLBACK_RESPONSES.length;
  return SECURE_FALLBACK_RESPONSES[index];
}

function buildRequestBody(message) {
  return {
    contents: [{ parts: [{ text: `${PERSONA_PROMPT}\n\nVisitor User Query: ${message}` }] }],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 1500
    }
  };
}

async function fetchGeminiResponse(message, apiKey) {
  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify(buildRequestBody(message)),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[Gemini API Diagnostic Error] Status: ${response.status} | Payload:`, errorBody);
      return pickFallback(message);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? pickFallback(message);
  } catch (error) {
    console.error("[Gemini API Network Exception]:", error);
    return pickFallback(message);
  }
}

export async function askGemini(message) {
  const apiKey = getApiKey();

  if (!apiKey) {
    return pickFallback(message);
  }

  return fetchGeminiResponse(message, apiKey);
}
