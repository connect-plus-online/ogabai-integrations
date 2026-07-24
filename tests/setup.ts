import { beforeAll, afterAll } from "vitest";


beforeAll(async () => {
  
});

afterAll(async () => {
  console.log("All tests done.");
  try {
      const r = await fetch("http://localhost:8080/health");
      console.log("Health:", r.status);
  } catch {
      console.log("Backend is dead.");
  }
  
});


export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));