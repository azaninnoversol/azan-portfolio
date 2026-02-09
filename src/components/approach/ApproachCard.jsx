"use client";
import React from "react";
import Typography from "../common/Typography/Typography";
import cn from "@/lib/utils";

const ApproachCard = ({ phase, title, desc, className }) => {
  return (
    <div
      className={cn("relative w-full h-120 lg:h-140 rounded-3xl border border-white/10 bg-[#0a0c1a] overflow-hidden group cursor-pointer", className)}
    >
      <span className="absolute top-4 left-4 text-slate-500/50 text-2xl z-20 group-hover:text-purple-400 transition-colors duration-500">+</span>
      <span className="absolute top-4 right-4 text-slate-500/50 text-2xl z-20 group-hover:text-purple-400 transition-colors duration-500">+</span>
      <span className="absolute bottom-4 left-4 text-slate-500/50 text-2xl z-20 group-hover:text-purple-400 transition-colors duration-500">+</span>
      <span className="absolute bottom-4 right-4 text-slate-500/50 text-2xl z-20 group-hover:text-purple-400 transition-colors duration-500">+</span>

      <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-90 group-hover:pointer-events-none">
        <div className="px-8 py-3 border border-purple-500/30 bg-purple-500/10 rounded-xl backdrop-blur-sm">
          <Typography variant="h2" className="text-purple-300 text-3xl md:text-4xl font-bold">
            {phase}
          </Typography>
        </div>
      </div>

      <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
        <div className="mb-6 px-4 py-1 border border-purple-500/30 bg-purple-500/10 rounded-full">
          <Typography variant="small" className="text-purple-400 text-xs font-bold uppercase tracking-widest">
            {phase}
          </Typography>
        </div>

        <Typography variant="h2" className="text-white text-2xl md:text-3xl font-bold leading-tight mb-4">
          {title}
        </Typography>

        <Typography variant="p" className="text-[#BEC1DD] text-sm md:text-base leading-relaxed font-light">
          {desc}
        </Typography>

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-purple-500/10 to-transparent pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};

export default React.memo(ApproachCard);
