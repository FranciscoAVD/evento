import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MAX_EVENTS_PER_PAGE } from "./constants";
import { TEventoEvent } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uppercase(city: string) {
  return city[0].toUpperCase() + city.slice(1);
}

export function formatSlug(slug: string): string {
  const words = slug.split('-');
  const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return formattedWords;
}