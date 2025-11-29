/**
const DEFAULT_API_URL =
  "http://127.0.0.1:5001/chisquarextask0/us-central1/predict";

const API_URL = import.meta.env.VITE_API_URL || DEFAULT_API_URL;

export async function predictDigit(imageBase64, mimeType) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageBase64, mimeType }),
  });

  let body = null;
  try {
    body = await res.json();
  } catch {
    // ignore
  }

  if (!res.ok) {
    console.error("Predict error response:", body);
    throw new Error(
      (body && (body.details || body.error)) ||
        `Request failed with status ${res.status}`
    );
  }

  return body;
}
*/
const API_URL = import.meta.env.VITE_API_URL || "/api/predict";

export async function predictDigit(imageBase64, mimeType) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageBase64, mimeType }),
  });

  let body = null;
  try {
    body = await res.json();
  } catch {
    // ignore parse errors
  }

  if (!res.ok) {
    console.error("Predict error response:", body);
    throw new Error(
      (body && (body.details || body.error)) ||
        `Request failed with status ${res.status}`
    );
  }

  return body;
}
