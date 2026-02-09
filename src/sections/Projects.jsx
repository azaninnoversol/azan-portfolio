"use client";
import React, { useState } from "react";
import TextPink from "@/components/common/TextPink/TextPink";
import Typography from "@/components/common/Typography/Typography";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/common/Button/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/lib/dummydata";

function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleCount(4);
  };

  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Typography variant="h1" className="capitalize text-center font-bold text-4xl sm:text-5xl! text-white leading-[1.1] sm:leading-[100%]">
          A small selection of{" "}
          <TextPink as="span" className="md:text-5xl! lg:text-5xl! tracking-[0.1px]!">
            recent projects
          </TextPink>
        </Typography>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 transition-all duration-500">
        {projects.slice(0, visibleCount).map((item) => (
          <ProjectCard key={item.id} title={item.title} description={item.description} img={item.img} iconLists={item.iconLists} link={item.link} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        {hasMore ? (
          <Button
            onClick={handleShowMore}
            className="group flex items-center gap-2 px-6 py-3 bg-[#161a31] border border-white/10 text-white rounded-xl hover:bg-[#1c2341] transition-all active:scale-95"
          >
            Show More
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </Button>
        ) : (
          projects.length > 4 && (
            <Button
              onClick={handleShowLess}
              className="group flex items-center gap-2 px-6 py-3 bg-[#161a31]/50 border border-white/10 text-white rounded-xl hover:bg-[#1c2341] transition-all active:scale-95"
            >
              Show Less
              <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          )
        )}
      </div>
    </section>
  );
}

export default React.memo(Projects);
