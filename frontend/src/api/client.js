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
      if (typeof data?.detail === 'string' && data.detail.trim()) {
        msg = data.detail.trim();
      } else if (typeof data?.message === 'string' && data.message.trim()) {
        msg = data.message.trim();
      } else if (data && typeof data === 'object') {
        const [firstValue] = Object.values(data);
        if (Array.isArray(firstValue) && firstValue.length) {
          msg = String(firstValue[0]);
        } else if (typeof firstValue === 'string' && firstValue.trim()) {
          msg = firstValue.trim();
        }
      }
    } catch {
      // ignore JSON parse errors from error responses
    }
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }
  if (res.status === 204) return null;

  return res.json();
};
