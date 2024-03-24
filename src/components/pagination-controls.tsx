import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
type PaginationControlsProps = {
  prev: string;
  next: string;
};
export default function PaginationControls({
  prev,
  next,
}: PaginationControlsProps) {
  return (
    <section className="flex w-full justify-between">
      {prev ? (
        <Link
          href={prev}
          className="flex items-center gap-2 px-5 py-3 text-white/75 bg-white/5 rounded-md hover:bg-white/10 hover:text-white transition"
        >
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link
          href={next}
          className="flex items-center gap-2 px-5 py-3 text-white/75 bg-white/5 rounded-md hover:bg-white/10 hover:text-white transition"
        >
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
