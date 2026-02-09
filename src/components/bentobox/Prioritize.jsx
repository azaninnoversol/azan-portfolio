import React from "react";
import Typography from "../common/Typography/Typography";
import Image from "next/image";
import { LaptopImg, PinkSvg, YellowSvg } from "@/lib/resources";

function Prioritize() {
  return (
    <div className="md:col-span-7 relative bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden min-h-87.5 md:min-h-112.5 group">
      <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end">
        <Typography variant="h2" className="text-white text-xl md:text-3xl font-bold max-w-sm leading-tight relative z-30">
          I prioritize client collaboration, fostering open communication
        </Typography>
      </div>

      <div className="absolute inset-0 z-10">
        <Image
          src={LaptopImg.src}
          alt="laptop"
          fill
          className="object-cover md:object-contain object-top-right transition-transform duration-500 group-hover:scale-105 opacity-50 md:opacity-100"
        />
      </div>

      <div className="absolute top-[5%] left-[5%] md:top-10 md:left-10 w-16 h-16 md:w-32 md:h-32 z-20 pointer-events-none">
        <Image src={PinkSvg} alt="pink-decoration" fill className="object-contain opacity-70 md:opacity-100" />
      </div>

      <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 w-20 h-20 md:w-40 md:h-40 z-20 pointer-events-none">
        <Image src={YellowSvg} alt="yellow-decoration" fill className="object-contain opacity-70 md:opacity-100" />
      </div>
    </div>
  );
}

export default React.memo(Prioritize);
