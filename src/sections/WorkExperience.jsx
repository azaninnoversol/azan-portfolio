"use client";
import React from "react";
import TextPink from "@/components/common/TextPink/TextPink";
import Typography from "@/components/common/Typography/Typography";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { workExperience } from "@/lib/dummydata";

function WorkExperience() {
  return (
    <section id="work-experience" className="py-20 w-full overflow-hidden bg-[#000319]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Typography
          variant="h1"
          className="capitalize text-center font-bold text-3xl sm:text-4xl md:text-5xl! text-white leading-[1.2] mb-12 md:mb-20"
        >
          My{" "}
          <TextPink as="span" className="md:text-5xl! lg:text-5xl! tracking-[0.1px]!">
            work experience
          </TextPink>
        </Typography>

        {/* Responsive Grid: Mobile 1 col, Desktop 2 cols */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {workExperience?.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(WorkExperience);
