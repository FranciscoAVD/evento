import H1 from "@/components/h1";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({ params }:Props): Promise<Metadata>{
  const slug = params.slug;
 
  const event = await getEvent(slug);
  return {
    title: `Evento - ${event.name}`
  }
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);
  return (
    <main>
      <section className="relative overflow-hidden flex items-center justify-center py-14 md:py-20">
        <Image
          className="object-cover blur-3xl -z-10"
          src={event.imageUrl}
          alt="Event Image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100dvw, 1280px"
        />

        <div className="flex flex-col items-center text-center gap-x-6 gap-y-6 md:flex-row md:text-left lg:gap-x-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
          <div className="flex flex-col md:h-[200px]">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-white/75 md:text-base">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 py-2 text-lg capitalize rounded-md border-white/10 border-2 mt-5 md:mt-auto w-[95dvw] sm:w-full md:text-base scale-effect">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75dvh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
            {event.description}
          </p>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
