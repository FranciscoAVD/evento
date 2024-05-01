import { v } from "convex/values";
import { query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const getEvents = query({
  args: {
    city_id: v.optional(v.id("city")),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    if (args.city_id) {
      return await ctx.db
        .query("event")
        //@ts-ignore
        .withIndex("by_city", (q) => q.eq("city_id", args.city_id))
        .paginate(args.paginationOpts);
    }
    return await ctx.db.query("event").paginate(args.paginationOpts);
  },
});

export const getEvent = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("event")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .unique();
  },
});
