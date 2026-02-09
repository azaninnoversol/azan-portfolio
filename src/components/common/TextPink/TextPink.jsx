import React from "react";
import cn from "@/lib/utils";
import Typography from "../Typography/Typography";

function TextPink({ className = "", as, variant = "h1", children, ...rest }) {
  return (
    <Typography
      as={as || "p"}
      variant={variant || "h1"}
      className={cn(
        "capitalize font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:-tracking-[3.6px] leading-[1.1] md:leading-[100%] text-light-pink",
      )}
      {...rest}
    >
      {children}
    </Typography>
  );
}

export default React.memo(TextPink);
