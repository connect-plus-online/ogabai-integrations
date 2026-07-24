import { defineConfig } from "vitest/config";
import dotenv from "dotenv"
dotenv.config()

const ENVIRONMENT = process.env.ENVIRONMENT;

export default defineConfig({
  test: {
    globals: true,
    globalSetup: [`./tests/${ENVIRONMENT}.global.setup.ts`],
    // globalSetup: ["./tests/global.setup.ts"],
    environment: "node", // or "jsdom" if testing hooks in React
    // testTimeout: 20000, 
    // hookTimeout: 20000,
    sequence: {
      // 👇 this makes test files run one by one
      concurrent: false,
      shuffle: false,
    },

    poolOptions: {
      forks: {
        singleFork: true,
      },
    },

    // // 👇 this disables parallel workers
    pool: 'forks', // 'threads',   // (default, but can be 'forks' if you use forking)
  },
});


