import { describe, it, expect } from "vitest";

describe("gate check", () => {
  it("fails on purpose to show build-and-push is blocked", () => {
    expect(true).toBe(false);
  });
});
