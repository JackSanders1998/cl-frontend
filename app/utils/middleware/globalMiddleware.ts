import { registerGlobalMiddleware } from "@tanstack/start";
import { loggingMiddleware } from "./loggingMiddleware";
import { authMiddleware } from "./authMiddleware";

registerGlobalMiddleware({
  middleware: [loggingMiddleware],
});
