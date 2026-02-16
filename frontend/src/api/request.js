import { apiFetch } from '@/api/client';
export const sendQuestion = (payload) => {
  return apiFetch('/questions/', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};
