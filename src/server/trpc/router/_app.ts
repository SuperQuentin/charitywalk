import { router } from "../trpc";
import { authRouter } from "./auth";
import { eventRouter } from "./event";
import { trackpointRouter } from "./trackpoint";
import { userRouter } from "./user";

export const appRouter = router({
  auth: authRouter,
  trackpoint: trackpointRouter,
  event: eventRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
