// src/types.ts
export type Money = { amount: number; currency: string };

export type UserRole = "admin" | "agent" | "customer";

export type User = {
  id: string;
  name: string;
  email?: string;
  role: UserRole;
  balance?: Money;
};

/** GraphQL-related */
export type GraphQLVariables = Record<string, any> | undefined;

export type GraphQLRequest = {
  query: string;
  variables?: GraphQLVariables;
  operationName?: string;
};

export type GraphQLError = {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: Record<string, any>;
};

export type GraphQLResponse<T = any> = {
  data?: T;
  errors?: GraphQLError[];
};
