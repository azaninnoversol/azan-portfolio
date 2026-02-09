import React from "react";
import TextPink from "@/components/common/TextPink/TextPink";
import Typography from "@/components/common/Typography/Typography";
import ApproachCard from "@/components/approach/ApproachCard";
import { approachData } from "@/lib/dummydata";

function Approach() {
  return (
    <section id="approach" className="py-20">
      <div className="max-w-7xl mx-auto">
        <Typography
          variant="h1"
          className="capitalize text-center font-bold text-3xl sm:text-4xl md:text-5xl! text-white leading-[1.2] mb-12 md:mb-20"
        >
          My{" "}
          <TextPink as="span" className="md:text-5xl! lg:text-5xl! tracking-[0.1px]!">
            Approach
          </TextPink>
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {approachData.map((item, idx) => (
            <ApproachCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Approach);
