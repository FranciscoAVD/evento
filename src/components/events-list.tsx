"use client";

import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";
import { MAX_EVENTS_PER_PAGE } from "@/lib/constants";
import { usePaginatedQuery, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Half2Icon } from "@radix-ui/react-icons";

type EventsListProps = {
  name: string;
};

export default function sectionEventsList({ name }: EventsListProps) {
  const city = useQuery(api.cities.getCity, { name: name });
  const { results, status, loadMore } = usePaginatedQuery(
    api.events.getEvents,
    { city_id: city?._id },
    { initialNumItems: MAX_EVENTS_PER_PAGE }
  );

  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap justify-center gap-10">
      {city || name.toLocaleLowerCase() === "all" ? (
        results.map((event) => <EventCard key={event._id} event={event} />)
      ) : (
        <h2 className="text-lg">
          0 results for <span className=" italic">{name}</span>
        </h2>
      )}
      {(city || name.toLocaleLowerCase() === "all") && (
        <PaginationControls load={loadMore} status={status} />
      )}
    </section>
  );
}
