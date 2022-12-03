import { Prisma } from "@prisma/client";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const trackpointRouter = router({
  setTrackpoint: publicProcedure
    .input(
      z.object({
        long: z.string(),
        lat: z.string(),
        timestamp: z.date()
      })
    )
    .query(({ ctx, input }) => {
      ctx.prisma.$queryRaw(Prisma.sql`
        INSERT INTO public."Trackpoint"
        (id, "timestamp", coords, created_at, updated_at, "userId")
        VALUES('', ${input.timestamp}, ST_MakePoint(${input.long}, ${input.lat}), CURRENT_TIMESTAMP, '', ${ctx.session?.user?.id});
      `)
    }),
})
