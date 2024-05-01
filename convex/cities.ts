import { v } from "convex/values";
import { query } from "./_generated/server";

export const getCity = query({
    args: {
        name: v.string()
    },
    handler: async (ctx, args) => {
        const res = await ctx.db.query("city").filter(q => q.eq(q.field("name"), args.name)).unique()
        return res ? res : undefined;
    }
})