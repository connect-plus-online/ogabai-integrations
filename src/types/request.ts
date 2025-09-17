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
