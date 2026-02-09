"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import cn from "@/lib/utils";
import Typography from "../common/Typography/Typography";
import { BlurImg } from "@/lib/resources";

const ProjectCard = ({ title, description, img, iconLists = [], link, className }) => {
  return (
    <div className={cn("sm:w-142.5 w-[80vw] min-h-130 flex flex-col items-center justify-center p-4 bg-slate-900/40 rounded-2xl", className)}>
      <div className="relative flex items-center justify-center overflow-hidden mb-10 rounded-3xl bg-[#13162d] w-full h-full">
        <div style={{ backgroundImage: `url(${BlurImg.src})` }} className="absolute inset-0 z-10 bg-cover bg-top bg-no-repeat" />

        <Image
          src={img}
          alt={title}
          width={570}
          height={380}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="w-full">
        <Typography as="h1" variant="h1" className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
          {title}
        </Typography>

        <Typography variant="p" className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] mt-3">
          {description}
        </Typography>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <Image src={icon} alt={`icon-${index}`} width={200} height={200} className="p-2" />
              </div>
            ))}
          </div>

          <a href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center group cursor-pointer">
            <p className="flex lg:text-lg md:text-xs text-sm text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
              Check Live Site
            </p>
            <ArrowUpRight className="ms-2 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
