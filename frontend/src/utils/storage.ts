const KEY = "fintrack_auth";

export function setToken(payload: { email: string }) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(payload));
}

export function getToken(): { email: string } | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
