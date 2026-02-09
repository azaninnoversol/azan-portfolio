import React from "react";
import cn from "@/lib/utils";

const variants = {
  h1: "text-4xl md:text-5xl font-extrabold tracking-tight lg:text-6xl",
  h2: "text-3xl font-bold tracking-tight first:mt-0",
  h3: "text-2xl font-semibold tracking-tight",
  p: "text-base leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 border-slate-300 pl-6 italic",
  small: "text-sm font-medium leading-none",
};

function Typography({ as: Component = "p", variant = "p", className = "", children, ...props }) {
  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}

export default React.memo(Typography);
