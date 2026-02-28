import {describe,it,expect,vi,beforeEach} from 'vitest';
import {apiFetch} from '@/api/client.js';
import {sendQuestion} from '@/api/request.js';

vi.mock('@/api/client', () => ({
  apiFetch: vi.fn(),
}));
describe("sendQuestion", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls apiFetch with POST and JSON body", async () => {
    const payload = {
      name: "Sasha",
      email: "sasha@example.com",
      message: "Hello",
      website: "",
    };

     apiFetch.mockResolvedValue({ id: 1 });
     await sendQuestion(payload);
      expect(apiFetch).toHaveBeenCalledWith(
      "/questions/",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(payload),
      })
    );
  });
});