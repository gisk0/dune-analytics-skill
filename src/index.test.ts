import { describe, it, expect } from "vitest";
import { SKILL_NAME } from "./index.js";

describe("dune-analytics-skill", () => {
  it("exports the skill name", () => {
    expect(SKILL_NAME).toBe("dune-analytics");
  });
});
