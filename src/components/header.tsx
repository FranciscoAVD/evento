"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/events/all",
    name: "All Events",
  },
];
export default function Header() {
  const activePath = usePathname();
  return (
    <header
      className="flex justify-between items-center border-b 
    border-white/10 h-14 px-3 sm:px-9"
    >
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-6 text-sm h-full">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                "transition flex items-center hover:text-white/70 relative",
                {
                  "text-white": activePath === route.path,
                  "text-white/50": activePath !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePath === route.path && (
                <motion.div layoutId="header-active" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
