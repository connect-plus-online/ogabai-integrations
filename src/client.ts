// src/client.ts
import { compose, type Middleware, type RequestContext, type ResponseContext } from "./middleware";
import { createTransport } from "./transport";
import { toAsyncHeadersFactory, toAsyncTokenProvider } from "./auth";
import type { GraphQLResponse } from "./types";

export type ClientOptions = {
  url: string;
  tokenProvider?: (() => Promise<string | null>) | (() => string | null);
  headersFactory?: (() => Promise<Record<string, string>>) | (() => Record<string, string>);
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  middlewares?: Middleware[]; // additional user middlewares
};

export class GraphQLClient {
  private url: string;
  private tokenProvider: () => Promise<string | null>;
  private headersFactory: () => Promise<Record<string, string>>;
  private middlewares: Middleware[];

  constructor(opts: ClientOptions) {
    this.url = opts.url;
    this.tokenProvider = toAsyncTokenProvider(opts.tokenProvider);
    this.headersFactory = toAsyncHeadersFactory(opts.headersFactory);
    // base pipeline: auth headers middleware -> user middlewares -> transport
    const base: Middleware[] = [this.authMiddleware.bind(this)];
    if (opts.middlewares) base.push(...opts.middlewares);
    base.push(createTransport({ fetchImpl: opts.fetchImpl, timeoutMs: opts.timeoutMs }));
    this.middlewares = base;
  }

  private async authMiddleware<T = any>(ctx: RequestContext, resCtx: ResponseContext<T>, next: () => Promise<void>) {
    const token = await this.tokenProvider();
    const dynamicHeaders = await this.headersFactory();
    ctx.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...dynamicHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(ctx.headers ?? {}),
    };
    await next();
  }

  // core request
  public async request<T = any>(query: string, variables?: Record<string, any>): Promise<GraphQLResponse<T>> {
    const ctx: RequestContext = { request: { query, variables }, url: this.url, headers: {} };
    const resCtx: ResponseContext<T> = {};
    const runner = compose(this.middlewares);
    await runner<T>(ctx, resCtx);

    if (resCtx.error) throw resCtx.error;
    if (!resCtx.response) throw new Error("No response from GraphQL transport");
    if (resCtx.response.errors && resCtx.response.errors.length) {
      // normalize, throw first error (apps can inspect)
      const e = resCtx.response.errors[0];
      const err = new Error(e.message);
      (err as any).extensions = e.extensions;
      throw err;
    }
    return resCtx.response;
  }
}
