import { createMiddleware, registerGlobalMiddleware } from "@tanstack/start";

export const loggingMiddleware = createMiddleware().server(
  async ({ next, data }) => {
    console.log("MOOSE");
    // console.log('Request received:', data)
    const result = await next();
    // console.log('Response processed:', result)
    return result;
  },
);
