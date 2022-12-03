import { router } from "../trpc";
import { authRouter } from "./auth";
import { trackpointRouter } from "./trackpoint";

export const appRouter = router({
  auth: authRouter,
  trackpoint: trackpointRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
