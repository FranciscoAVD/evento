import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";
import { MAX_EVENTS_PER_PAGE } from "@/lib/constants";

type EventsListProps = {
  city: string;
  page: number;
};

export default async function sectionEventsList({ city, page }: EventsListProps) {
  const {events, totalCount} = await getEvents(city, page);
  const previousPath = page > 1 ? `${city}?page=${page-1}` : "";
  const maxPages = totalCount / MAX_EVENTS_PER_PAGE;
  const nextPath = page < maxPages ? `${city}?page=${page+1}`: "";
  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap justify-center gap-10">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls prev={previousPath} next={nextPath}/>
    </section>
  );
}
