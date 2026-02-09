"use client";
import React from "react";
import Typography from "../Typography/Typography";
import TextPink from "../TextPink/TextPink";
import Button from "../Button/Button";
import Image from "next/image";
import { Github, Instagram, Linkedin, Phone, Send, Twitter } from "lucide-react";
import { FooterGridImg } from "@/lib/resources";

const socialMedia = [
  { id: 1, Icon: Instagram, link: "https://github.com/yourusername" },
  { id: 2, Icon: Twitter, link: "https://twitter.com/yourusername" },
  { id: 3, Icon: Github, link: "https://github.com/yourusername" },
  { id: 4, Icon: Phone, link: "https://github.com/yourusername" },
  { id: 5, Icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
];

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden bg-[#000319]" id="contact">
      <div className="w-full absolute left-0 bottom-0 min-h-full h-full">
        <Image src={FooterGridImg.src} width={200} height={200} alt="grid" className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col items-center relative z-10 px-4">
        <Typography variant="h1" className="text-center font-bold text-4xl md:text-5xl lg:max-w-[45vw] text-white leading-[1.2]">
          Ready to take <TextPink as="span">your</TextPink> digital presence to the next level?
        </Typography>

        <Typography variant="p" className="text-[#BEC1DD] md:mt-10 my-5 text-center max-w-lg">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </Typography>

        <a href="mailto:hafizazan.dev26@outlook.com" className="mt-6">
          <Button className="flex items-center gap-2 px-7 py-3 bg-[#161a31] border border-white/10 text-white rounded-xl hover:bg-[#1c2341] transition-all active:scale-95 shadow-2xl">
            Contact Me Now
            <Send size={18} className="text-purple-400" />
          </Button>
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center max-w-7xl mx-auto gap-6 relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-white/70">Copyright © {new Date().getFullYear()} Hafiz Azan</p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, Icon, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-[#111928]/80 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-white/70 hover:text-purple-400"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
