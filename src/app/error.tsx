"use client";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <main className="flex flex-col gap-[150px] justify-around h-full py-24">
      <h1 className="text-4xl text-white md:text-[3rem] font-semibold text-balance text-center">
        Something Went Wrong!
      </h1>
      <button
        className="bg-white/5 w-fit py-2 px-4 rounded-md mx-auto md:text-xl text-white/75 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white transition"
        onClick={reset}
      >
        Try Again
      </button>
    </main>
  );
}
