import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { MAX_EVENTS_PER_PAGE } from "./constants";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uppercase(city: string) {
  return city[0].toUpperCase() + city.slice(1);
}

export async function getEvents(city: string, page = 1) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );
  // const events: EventoEvent[] = await response.json();

  //passing undefined returns all events.
  //Same as prisma.eventoEvent.findMany()
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : uppercase(city),
    },
    orderBy: {
      date: "asc",
    },
    take: MAX_EVENTS_PER_PAGE,
    skip: MAX_EVENTS_PER_PAGE * (page - 1),
  });

  const totalCount = await prisma.eventoEvent.count({
    where: { city: city === "all" ? undefined : uppercase(city)}
  });
  return { events, totalCount};
}

export async function getEvent(slug: string) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: EventoEvent = await response.json();

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
}
