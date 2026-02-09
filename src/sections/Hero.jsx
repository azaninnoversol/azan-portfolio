"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/common/Button/Button";
import TextPink from "@/components/common/TextPink/TextPink";
import Typography from "@/components/common/Typography/Typography";
import { MoveUpRight } from "lucide-react";
import { buttonStyle } from "@/lib/helperFuntions";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Frontend Developer", "React Developer", "Next.js Developer", "Vue.js Developer"];
  const typingSpeed = isDeleting ? 50 : 150;

  useEffect(() => {
    const currentFullText = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));

        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section id="about" className="pt-38 md:pt-50 lg:pt-60 px-4 max-w-7xl mx-auto text-center min-h-full min-w-full">
      <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto">
        <Typography variant="p" className="uppercase font-light text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-light-blue">
          Dynamic Web Magic with Frontend Tools
        </Typography>

        <Typography
          variant="h1"
          className="capitalize font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white -tracking-[1px] md:-tracking-[3.6px] leading-[1.1] md:leading-[100%]"
        >
          Transforming Concepts into Seamless <TextPink as="span">User Experiences</TextPink>
        </Typography>

        <Typography
          variant="p"
          className="font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-[120%] text-light-blue max-w-2xl mx-auto flex items-center gap-x-2"
        >
          Hi! I’m Hafiz Azan, a <span className="change-context">{displayText}</span> based in Pakistan
        </Typography>

        <Button variant="pink" size="lg" icon={MoveUpRight} iconPosition="right" style={{ ...buttonStyle }} className={"rounded-sm mt-3"}>
          See My Work
        </Button>
      </div>
    </section>
  );
}

export default React.memo(Hero);
