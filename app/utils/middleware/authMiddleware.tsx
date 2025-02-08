import { createMiddleware } from "@tanstack/start";
import { getHeader } from "@tanstack/start/server";

export const extractToken = () =>
  getHeader("Cookie")?.split("__session=")[1].split(" ")[0].split(";")[0];

export const authMiddleware = createMiddleware().server(async ({ next }) => {
  const authorizationHeader = getHeader("Cookie")
    ?.split("__session=")[1]
    .split(" ")[0]
    .split(";")[0];
  return next({
    context: `Bearer ${authorizationHeader}`,
  });
});
