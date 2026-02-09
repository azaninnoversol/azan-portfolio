import React from "react";
import Hero from "@/sections/Hero";
import Header from "@/components/common/Header/Header";
import BackgroundImgStyle from "@/components/common/BackgroundImgStyle/BackgroundImgStyle";
import { GridPattern, SpotlightLeft, SpotlightRight } from "@/lib/resources";
import BentoBox from "@/sections/BentoBox";

function Page() {
  return (
    <main style={{ backgroundImage: `url(${GridPattern.src})` }} className="min-h-screen w-full bg-slate-950 bg-repeat bg-center bg-fixed">
      <div className="fixed top-0 left-0 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[35vw] lg:h-[35vw] opacity-70 md:opacity-100 pointer-events-none">
        <BackgroundImgStyle image={SpotlightLeft.src} />
      </div>

      <div className="fixed top-0 right-0 w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw] opacity-60 md:opacity-100 pointer-events-none">
        <BackgroundImgStyle image={SpotlightRight.src} />
      </div>

      <Header />
      <Hero />
      <BentoBox />
    </main>
  );
}

export default React.memo(Page);
