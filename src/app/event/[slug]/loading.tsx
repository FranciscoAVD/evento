import Skeleton from "@/components/skeleton";
import { formatSlug } from "@/lib/utils";
import { Metadata } from "next";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }:Props): Promise<Metadata>{
  const slug = params.slug;
 
  return {
    title: `Evento - ${formatSlug(slug)}`
  }
}

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton />
      <Skeleton className="h-4 w-[400px]"/>
      <Skeleton className="h-4 w-[430px]"/>
    </div>
  );
}
