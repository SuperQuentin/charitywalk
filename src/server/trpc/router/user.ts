import { Prisma } from "@prisma/client";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = router({
  getAllAccount: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.prisma.$queryRaw(Prisma.sql`
      SELECT DISTINCT ST_AsLatLonText(coords, 'D.DDDD'), "userId", firstname, lastname, email FROM public."Trackpoint"
		INNER JOIN public."Account" ON public."Account"."id" = public."Trackpoint"."accountId"
		INNER JOIN public."User" ON public."User"."id" = public."Account"."userId";
    `)

    return res
  }),
});
