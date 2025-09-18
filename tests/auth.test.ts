import { describe, it, expect } from "vitest";
import { GraphQLClient } from "../src/client";
import { createAuthService } from "../src/services/user/auth.service";

const client = new GraphQLClient({
    url: "http://localhost:8080/graphql"
});
const authService = createAuthService(client)

describe("Auth API", () => {
  it("logs in with valid credentials", async () => {
    const res = await authService.login({
        phone: "+2348064668635",
        pin: "12345678"
    });
    expect(res?.accessToken).toBeTypeOf("string");
    expect(res?.userId).toBeTypeOf("string");
  });
});
