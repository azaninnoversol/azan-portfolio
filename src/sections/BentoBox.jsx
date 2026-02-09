"use client";
import React, { useState } from "react";
import Typography from "@/components/common/Typography/Typography";
import Button from "@/components/common/Button/Button";
import { Copy, Check } from "lucide-react";
import Prioritize from "@/components/bentobox/Prioritize";
import { AvailableImg, GridImg } from "@/lib/resources";
import cn from "@/lib/utils";

function BentoBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hafizazan.dev26@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="bento-box" className="py-20 pt-40 px-4 md:px-6 bg-[#000319]">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Prioritize />

          <div className="md:col-span-5 flex flex-col justify-between relative overflow-hidden">
            <div
              className="border border-white/10 rounded-3xl p-8 py-12 bg-cover bg-no-repeat bg-center relative"
              style={{ backgroundImage: `url(${AvailableImg.src})` }}
            >
              <div
                style={{ backgroundImage: `url(${GridImg.src})` }}
                className="absolute inset-0 bg-cover bg-center opacity-50 z-0 pointer-events-none"
              />

              <Typography variant="h3" className="text-white text-xl md:text-2xl font-bold mb-4 relative z-10">
                I'm very flexible with time zone communications
              </Typography>

              <div className="grid grid-cols-3 gap-2 relative z-10 h-[50%] mt-6">
                {["USA", "Germany", "Russia"].map((t, idx) => (
                  <div
                    key={t}
                    className={cn(
                      "flex",
                      idx === 0 && "justify-start items-start",
                      idx === 1 && "justify-center items-end",
                      idx === 2 && "justify-end items-start",
                    )}
                  >
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-400">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 py-12">
              <Typography variant="h3" className="text-white text-xl md:text-2xl font-bold mb-4 relative z-10">
                I'm very flexible with time zone communications
              </Typography>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["USA", "Germany", "Russia"].map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3 bg-slate-900/40 border border-white/10 rounded-3xl p-8">
            <Typography className="text-white text-lg font-bold leading-snug">Tech enthusiast with a passion for development.</Typography>
            <div className="mt-6 h-20 bg-white/5 rounded-xl border border-white/5 overflow-hidden p-2 opacity-50">
              <div className="w-1/2 h-2 bg-slate-700 rounded mb-2" />
              <div className="w-full h-2 bg-slate-700 rounded" />
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900/40 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <Typography className="text-slate-400 text-xs uppercase tracking-widest mb-2 font-semibold">The Inside Scoop</Typography>
              <Typography variant="h3" className="text-white text-xl md:text-2xl font-bold">
                Currently building a JS Animation library
              </Typography>
            </div>
            <div className="w-full md:w-auto bg-black/50 p-4 rounded-2xl border border-white/10 font-mono text-[10px] text-purple-400 shadow-2xl">
              <p>
                import <span className="text-blue-400">framer</span> from <span className="text-yellow-400">'motion'</span>
              </p>
              <p className="mt-1 text-slate-500">// Initialize magic</p>
              <p className="text-blue-300">
                animate<span className="text-white">()</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-3 bg-slate-900/40 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4">
            <Typography className="text-white text-lg font-bold">Do you want to start a project together?</Typography>
            <Button
              onClick={handleCopy}
              className={`w-full rounded-xl transition-all duration-500 ${copied ? "bg-green-600" : "bg-[#161a31]"}`}
              icon={copied ? Check : Copy}
            >
              {copied ? "Email Copied!" : "Copy my email address"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(BentoBox);
