import { router } from "../trpc";
import { authRouter } from "./auth";
import { eventRouter } from "./event";
import { trackpointRouter } from "./trackpoint";

export const appRouter = router({
  auth: authRouter,
  trackpoint: trackpointRouter,
  event: eventRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
