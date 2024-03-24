"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [userInput, setUserInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(userInput) router.push(`/events/${userInput.toLowerCase()}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] 
          px-6 outline-none ring-accent/50 transition 
          focus:ring-[2px] focus:bg-white/10"
        type="text"
        placeholder="Search events in any city..."
        spellCheck="false"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </form>
  );
}
