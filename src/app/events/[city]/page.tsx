import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import Loading from "./loading"
import { Suspense } from "react";
import { uppercase } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  },
};

interface EventsPageProps extends Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
}
//Or
// type EventsPageProps = Props & {
//   searchParams: {
//     page: number;
//   }
// }


export function generateMetadata({ params }:Props): Metadata{
  const city = params.city;

  return ({
    title: city === "all" ? `Evento - All Events` : `Evento - Events in ${uppercase(city)}`,
  })
}

export default function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  const cityName = uppercase(params.city);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{city === "all" ? "All Events" : `Events in ${cityName}`}</H1>
      <Suspense key={city} fallback={<Loading />}>
        <EventsList name={cityName}/>
      </Suspense>
    </main>
  );
}
