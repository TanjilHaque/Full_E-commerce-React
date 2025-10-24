import React from "react";

const PrimaryBtn = ({
  px = 48,
  py = 16,
  text,
  onClick,
  bgColor,
  hoverColor,
  textColor,
}) => {
  return (
    <div
      style={{ padding: `${py}px ${px}px` }}
      onClick={onClick}
      className={`font-medium tracking-[0%] leading-[24px] rounded-[4px] ${
        textColor || "text-white"
      } cursor-pointer
       transition-all duration-300 ${bgColor || "bg-Secondary2"} ${
        hoverColor || "hover:bg-HoverButtonPink"
      }`}
    >
      {text || "Primary Btn"}
    </div>
  );
};

export default PrimaryBtn;
