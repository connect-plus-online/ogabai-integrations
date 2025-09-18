import { beforeAll, afterAll, expect } from "vitest";

// e.g. spin up test env, seed DB, or just set globals
beforeAll(() => {
  console.log("Starting SDK integration tests...");
});

afterAll(() => {
  console.log("All tests done.");
});

export { expect };

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));