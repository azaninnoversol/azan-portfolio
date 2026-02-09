import React from "react";
import cn from "@/lib/utils";

const buttonVariants = {
  variant: {
    primary: "bg-slate-800 text-white hover:bg-slate-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    outline: "border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/50",
    pink: "bg-purple-600 text-white hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)]",
  },
  size: {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-8 py-4 text-base font-semibold",
    icon: "p-3",
  },
};

function Button({ children, variant = "primary", size = "md", className, icon: Icon, iconPosition = "left", ...props }) {
  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none gap-2",
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className,
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </button>
  );
}

export default React.memo(Button);
