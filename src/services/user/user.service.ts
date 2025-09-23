import type { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import userSchema from "./schemas/user.schema";
import { User } from "../../types/user";
import { getUserResponse, GetUserResponse, getUserResponseNestedFields, GetUserResponseNestedFields } from "./types/user.type";

export const createUserService = (client: GraphQLClient) => ({
  async getUser(
    _id: string, 
    fetchFields?: {
      root?: (keyof GetUserResponse)[],
      nestedFields?: GetUserResponseNestedFields
    },
    option?: RequestOption
  ): Promise<User | null> {
    const res = await client.request<{ getUser: User }>(
      userSchema.getUser(
        gqlQueryStringBuilder<GetUserResponse, GetUserResponseNestedFields>(
          fetchFields?.root ?? getUserResponse, 
          fetchFields?.nestedFields ?? getUserResponseNestedFields
        )
      ), 
      { _id }, 
      option
    );
    return res.data?.getUser ?? null;
  },
});

