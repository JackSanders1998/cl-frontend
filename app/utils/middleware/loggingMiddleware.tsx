import { createMiddleware } from "@tanstack/start";

export const loggingMiddleware = createMiddleware().server(
  async ({ next, data }) => {
    return next();
  },
);
