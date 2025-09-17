import type { User } from "../types";
import type { GraphQLClient } from "../client";

/** GraphQL text kept here so you write ops by hand */
const GET_USER = `
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    role
    balance { amount currency }
  }
}
`;

export const createUserService = (client: GraphQLClient) => ({
  async getUser(id: string): Promise<User | null> {
    const res = await client.request<{ user: User }>(GET_USER, { id }, { cacheOptions : { skipCache: true }});
    return res.data?.user ?? null;
  },
});

