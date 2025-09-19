import React from "react";

const PrimaryBtn = ({
  px = 48,
  py = 16,
  text,
  onClick,
  bgColor,
  hoverColor,
}) => {
  return (
    <div
      style={{ padding: `${py}px ${px}px` }}
      onClick={onClick}
      className={`w-fit  rounded-[4px] text-white cursor-pointer
       transition-all duration-300 ${bgColor || "bg-Secondary2"} ${
        hoverColor || "hover:bg-HoverButtonPink"
      }`}
    >
      {text || "Primary Btn"}
    </div>
  );
};

export default PrimaryBtn;
