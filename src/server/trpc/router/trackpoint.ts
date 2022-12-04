import { Prisma } from "@prisma/client";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const trackpointRouter = router({
  create: publicProcedure.input(z.object({
    timestamp: z.number(),
    lat: z.number(),
    long: z.number(),
  })).mutation(async ({ ctx, input }) => {
    let res;
    if (ctx.session) {

      const account = await ctx.prisma.account.findFirst({
        where: {
          userId: ctx.session?.user?.id
        },
        select: {
          id: true,
        }
      })

      res = await ctx.prisma.$queryRaw(Prisma.sql`
      INSERT INTO public."Trackpoint"(id, timestamp, coords, updated_at, "accountId")
      VALUES (gen_random_uuid(), CURRENT_TIMESTAMP ,ST_MakePoint(${input.long}, ${input.lat}), CURRENT_TIMESTAMP, ${account?.id});
    `)
    }

    return res
  })
})