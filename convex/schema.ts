import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  city: defineTable({
    name: v.string(),
    events: v.number(),
  }),
  event: defineTable({
    name: v.string(),
    slug: v.string(),
    city: v.string(),
    location: v.string(),
    date: v.number(),
    organizer_name: v.string(),
    description: v.string(),
    city_id: v.id("city")
  }).index("by_city",["city_id"])
});
