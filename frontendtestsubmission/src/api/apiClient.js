ECHO is on.

export async function apiRequest(path, options = {}) {
  const base = process.env.REACT_APP_API_BASE || "http://20.244.56.144/evaluation-service";
  const url = base + path;
  const res = await fetch(url, options);
  const data = await res.json().catch(() => null);
  return { status: res.status, data };
}
