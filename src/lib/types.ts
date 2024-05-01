import { Id } from "../../convex/_generated/dataModel"

export type TEventoEvent = {
    _id: Id<"event">,
    _creationTime: number,
    name: string,
    slug: string,
    city: string,
    location: string,
    date: number,
    organizer_name: string,
    description: string,
    city_id: Id<"city">,
}
