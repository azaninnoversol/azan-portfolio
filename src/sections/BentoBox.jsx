"use client";
import React, { useState } from "react";
import Typography from "@/components/common/Typography/Typography";
import Button from "@/components/common/Button/Button";
import { Copy, Check } from "lucide-react";
import Prioritize from "@/components/bentobox/Prioritize";
import { AvailableImg, GridImg, GridPattern } from "@/lib/resources";
import TechStackCard from "@/components/bentobox/TechStackCard";
import cn from "@/lib/utils";

function BentoBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hafizazan.dev26@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Available = ["UK", "Australia", "Pakistan"];

  return (
    <section id="bento-box" className="py-10 md:py-20 pt-20 md:pt-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Prioritize />

          <div className="md:col-span-5 flex flex-col gap-4 relative">
            <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-6 md:p-8 flex-1 relative overflow-hidden">
              <div
                style={{ backgroundImage: `url(${GridImg.src})` }}
                className="absolute inset-0 bg-cover bg-center opacity-30 z-0 pointer-events-none"
              />

              <Typography variant="h3" className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-4 relative z-10 max-w-xs">
                I&apos;m very flexible with time zone communications
              </Typography>

              <div className="grid grid-cols-3 gap-2 relative z-10 mt-6 min-h-15">
                {Available.map((t, idx) => (
                  <div
                    key={t}
                    className={cn(
                      "flex",
                      idx === 0 && "justify-start items-start",
                      idx === 1 && "justify-center items-end",
                      idx === 2 && "justify-end items-start",
                    )}
                  >
                    <span className="px-2 py-1 md:px-3 md:py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] md:text-xs text-slate-400 whitespace-nowrap">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <TechStackCard />
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-4 border border-white/10 bg-slate-900/20 rounded-3xl p-6 md:p-8 relative overflow-hidden group min-h-45 md:min-h-55">
            <div style={{ backgroundImage: `url(${GridPattern.src})` }} className="absolute inset-0 bg-cover bg-center opacity-40"></div>

            <Typography className="text-white text-xl md:text-2xl font-bold leading-tight relative z-10 max-w-62.5">
              Tech enthusiast with a passion for development.
            </Typography>

            <div className="absolute -bottom-5 -right-5 w-32 md:w-48 h-20 md:h-28 border border-white/20 rounded-xl p-3 md:p-4 opacity-40 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex gap-2 mb-2 md:mb-3">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-300"></div>
                <div className="w-6 h-1.5 md:w-8 md:h-2 rounded-full bg-slate-500"></div>
              </div>
              <div className="w-full h-1 bg-slate-500 rounded mb-2"></div>
              <div className="w-3/4 h-1 bg-slate-500 rounded"></div>
            </div>
          </div>

          <div className="md:col-span-8 border border-white/10 bg-slate-900/20 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden min-h-87.5 md:min-h-115 md:row-span-2">
            <div className="flex-1 relative z-10">
              <Typography variant="p" className="text-[#E4ECFF] text-xs md:text-sm uppercase tracking-widest mb-4 font-light opacity-70">
                The Inside Scoop
              </Typography>
              <Typography className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.2]">
                Currently building a <br className="hidden md:block" /> JS Animation library
              </Typography>
            </div>

            <div className="md:absolute md:right-6 md:-bottom-2 w-full md:w-72 lg:w-80 bg-[#020617]/80 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-white/10 font-mono text-[11px] md:text-[13px] leading-relaxed shadow-2xl self-center md:self-end md:mb-10">
              <div className="text-slate-500 mb-1">// Importing a module</div>
              <div className="text-pink-500">
                import <span className="text-white">magic</span> <span className="text-pink-500">from</span>
              </div>
              <div className="text-orange-300 mb-3">'animation-lib';</div>

              <div className="text-slate-500 mb-1">// Magic starts</div>
              <div className="text-blue-400">
                animate<span className="text-white">()</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 border border-white/10 bg-slate-900/20 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-50 md:min-h-55">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_80%,#1e266d_0%,transparent_50%)]"></div>

            <Typography className="text-white text-lg md:text-2xl font-bold mb-6 relative z-10 px-4">
              Do you want to start a project together?
            </Typography>

            <Button
              onClick={handleCopy}
              className={cn(
                "group relative z-10 flex items-center gap-2 md:gap-3 px-5 py-2.5 md:px-7 md:py-3.5 rounded-xl border border-white/10 text-white text-sm md:text-base font-medium transition-all duration-300 active:scale-95",
                copied ? "bg-green-600/20 border-green-500/50" : "bg-[#161a31] hover:bg-[#1c2341]",
              )}
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-slate-400" />}
              <span>{copied ? "Email Copied!" : "Copy my email address"}</span>

              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(BentoBox);
