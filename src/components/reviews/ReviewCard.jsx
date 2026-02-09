"use client";
import React from "react";
import Typography from "../common/Typography/Typography";

const ReviewCard = ({ quote, name, title, img }) => {
  return (
    <div className="bg-[#0a0c1a] border border-white/10 rounded-4xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e266d_0%,transparent_50%)] opacity-30" />

      <div className="relative z-10 flex flex-col gap-8">
        <Typography variant="p" className="text-[#BEC1DD] text-lg md:text-xl leading-relaxed font-light tracking-wide italic">
          &ldquo;{quote}&rdquo;
        </Typography>

        <div className="flex items-center gap-4 mt-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
            <img src={img || "/profile.jpg"} alt={name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <Typography variant="h4" className="text-white text-lg md:text-xl font-bold tracking-tight">
              {name}
            </Typography>
            <Typography variant="small" className="text-[#94a3b8] text-sm md:text-base font-medium opacity-80">
              {title}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ReviewCard);
