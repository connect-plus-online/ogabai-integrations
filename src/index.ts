export * from "./types";
export * from "./auth";
export * from "./errors";
export { GraphQLClient } from "./client";
export * from "./services/user.service";
export * from "./testing/mockClient";

/* Example ready-to-use factory:
   export const createDefaultClient = (opts) => new GraphQLClient(opts);
*/
