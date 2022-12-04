import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const eventRouter = router({
    getAll: publicProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.event.findMany({
                include: {
                    routes: true,
                }
            });
        }),
    register: publicProcedure
        .input(z.object({
            userId: z.string(),
            eventId: z.string(),
            routeId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.entries.create({
                data: {
                    userId: input.userId,
                    eventId: input.eventId,
                    routeId: input.routeId,
                }
            });
        }),

})