import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    environment: "node", // or "jsdom" if testing hooks in React
  },
});
