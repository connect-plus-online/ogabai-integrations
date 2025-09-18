import type { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import userSchema from "./schemas/user.schema";
import { User } from "../../types/user";
import { GetUserResponse, GetUserResponseBP } from "./types/user.type";
import { userQuery } from "./entities/user.entity";

export const createUserService = (client: GraphQLClient) => ({
  async getUser(
    _id: string, 
    fetchFields?: {
      root?: (keyof GetUserResponse)[],
      nestedFields?: GetUserResponseBP
    },
    option?: RequestOption
  ): Promise<User | null> {
    const res = await client.request<{ getUser: User }>(
      userSchema.getUser(
        gqlQueryStringBuilder<GetUserResponse, GetUserResponseBP>(
          fetchFields?.root ?? ["user"], 
          fetchFields?.nestedFields ?? {
            user: userQuery,
          }
        )
      ), 
      { _id }, 
      option
    );
    return res.data?.getUser ?? null;
  },
});

