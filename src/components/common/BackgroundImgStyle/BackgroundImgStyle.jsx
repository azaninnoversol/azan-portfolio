import React from "react";

function BackgroundImgStyle({ image }) {
  return <div style={{ backgroundImage: `url(${image})` }} className="w-fulll h-full bg-cover bg-no-repeat z-0 pointer-events-none" />;
}

export default React.memo(BackgroundImgStyle);
