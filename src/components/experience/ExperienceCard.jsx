"use client";
import React from "react";
import Typography from "../common/Typography/Typography";
import cn from "@/lib/utils";

const ExperienceCard = ({ title, desc, icon, className }) => {
  return (
    <div className={cn("text-white border border-white/10 bg-[#0a0c1a] rounded-[1.75rem] shadow-2xl relative overflow-hidden group", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#1e266d_0%,transparent_70%)] opacity-30 pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center p-6 md:p-8 lg:p-8 gap-6 relative z-10">
        <div className="w-20 md:w-28 lg:w-32 shrink-0">
          <img
            src={icon || "/exp1.svg"}
            alt={title}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex-1">
          <Typography variant="h3" className="text-start text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
            {title}
          </Typography>

          <Typography variant="p" className="text-start text-[#BEC1DD] mt-2 md:mt-4 font-medium text-sm md:text-base leading-relaxed opacity-90">
            {desc}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExperienceCard);
