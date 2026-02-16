const API_BASE = '/api';

export const apiFetch = async (path, options = {}) => {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const data = await res.json();
      msg = data?.detail || data?.message || msg;
    } catch {
      // ignore JSON parse errors from error responses
    }
    throw new Error(msg);
  }
  if (res.status === 204) return null;

  return res.json();
};
