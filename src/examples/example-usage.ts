import { GraphQLClient } from "../client";
import { createUserService } from "../services/user.service";
import { retryMiddleware } from "../middlewares/retry";

const client = new GraphQLClient({
  url: "https://api.example.com/graphql",
  tokenProvider: async () => localStorage.getItem("token"),
  headersFactory: async () => ({ "x-custom": "1" }),
  middlewares: [retryMiddleware({ retries: 2 })],
  timeoutMs: 10_000,
});

const userService = createUserService(client);

(async () => {
  const u = await userService.getUser("123");
  console.log(u);
})();
