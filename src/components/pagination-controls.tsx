import { MAX_EVENTS_PER_PAGE } from "@/lib/constants";

type PaginationControlsProps = {
  load: (n: number) => void;
  status: string;
};
export default function PaginationControls({
  load,
  status,
}: PaginationControlsProps) {
  return (
    <section className="flex w-full justify-between">
      <button
        onClick={() => load(MAX_EVENTS_PER_PAGE)}
        className="flex items-center gap-2 px-5 py-3 text-white/75 bg-white/5 rounded-md hover:bg-white/10 hover:text-white transition disabled:pointer-events-none"
        disabled={status !== "CanLoadMore"}
      >
        Load More
      </button>
    </section>
  );
}
