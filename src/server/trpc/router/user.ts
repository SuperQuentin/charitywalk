import { Prisma } from "@prisma/client";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = router({
  getAllAccount: publicProcedure.query(async ({ ctx }) => {
	 const res = await ctx.prisma.$queryRaw(Prisma.sql`
      SELECT DISTINCT st_Y(coords) as lat, ST_X(coords) as long, "accountId" FROM public."Trackpoint";
    `)

	 return res
  }),
});
