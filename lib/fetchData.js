// lib/fetchData.js

export async function getData(endpoint) {
  try {
    const res = await fetch(`https://f1api.dev${endpoint}`);
    if (!res.ok) {
      console.warn(`F1 API responded with status ${res.status}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error("F1 API fetch failed:", err.message);
    return null;
  }
}
