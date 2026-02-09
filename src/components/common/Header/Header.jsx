import React from "react";
import { navItems } from "@/lib/dummydata";

function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-full max-w-md md:max-w-lg">
      <nav className="bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-2 sm:px-6 py-3 sm:py-4">
        <ul className="flex items-center justify-evenly sm:justify-center gap-x-2 sm:gap-x-8">
          {navItems?.map((single, idx) => (
            <li
              key={idx}
              className="text-slate-300 hover:text-white text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-all duration-300 whitespace-nowrap px-2 py-1"
            >
              {single?.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);
