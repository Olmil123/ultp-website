import { describe, it, expect, vi, beforeEach } from "vitest";
import { apiFetch } from '@/api/client';
describe("apiFetch", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns JSON when response.ok is true", async () => {
    const fakeJson = { hello: "world" };

    vi.stubGlobal("fetch", vi.fn(async () => ({
      ok: true,
      status: 200,
      json: async () => fakeJson,
    })));

    const data = await apiFetch("/health/");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual(fakeJson);
  });

  it("throws Error with detail text on 429", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({
      ok: false,
      status: 429,
      json: async () => ({ detail: "Too many requests" }),
    })));

    await expect(apiFetch("/questions/")).rejects.toThrow("Too many requests");
  });
});