import { router, publicProcedure } from "../trpc";

export const eventRouter = router({
    getAll: publicProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.event.findMany({
                include: {
                    routes: true,
                }
            });
        })
})