"use client";
import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#000319]">
      <div className="absolute w-75 h-75 bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />

      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-2 border-transparent border-t-purple-500 border-r-purple-500 rounded-full animate-spin" />

        <div className="absolute w-16 h-16 border border-white/10 rounded-full animate-ping opacity-20" />

        <div className="absolute flex items-center justify-center">
          <div className="w-12 h-12 bg-linear-to-br from-[#161a31] to-[#06091f] border border-white/10 rounded-xl rotate-45 flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold -rotate-45 text-xl">A</span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-2">
        <h2 className="text-white font-medium tracking-[0.2em] text-sm uppercase animate-pulse">Setting up your experience</h2>
        <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-transparent via-purple-500 to-transparent w-full animate-[shimmer_2s_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default React.memo(Loading);
