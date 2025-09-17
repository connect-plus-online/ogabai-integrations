import { GraphQLRequest, GraphQLResponse } from "./types";
import { CacheRequestOptions } from "./middlewares/cache";

export type RequestContext = {
  request: GraphQLRequest;
  url: string;
  headers: Record<string, string>;
  meta?: Record<string, any>;
  cacheOptions?: CacheRequestOptions;
};

export type ResponseContext<T = any> = {
  response?: GraphQLResponse<T> | null;
  error?: Error | null;
  status?: number | null;
};

export type Next = () => Promise<void>;

export type Middleware = <T = any>(
  ctx: RequestContext,
  resCtx: ResponseContext<T>,
  next: Next
) => Promise<void>;

/**
 * compose middlewares into a single runner.
 * similar idea to koa-compose.
 */
export const compose =
  (middlewares: Middleware[]) =>
  async <T = any>(ctx: RequestContext, resCtx: ResponseContext<T>) => {
    let idx = -1;
    const dispatch = async (i: number): Promise<void> => {
      if (i <= idx) throw new Error("next() called multiple times");
      idx = i;
      const fn = middlewares[i];
      if (!fn) return;
      await fn(ctx, resCtx, () => dispatch(i + 1));
    };
    await dispatch(0);
  };
