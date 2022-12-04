import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { router } from "../trpc";
import { authRouter } from "./auth";
import { trackpointRouter } from "./trackpoint";
import { userRouter } from "./user";

export const appRouter = router({
  auth: authRouter,
  trackpoint: trackpointRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
