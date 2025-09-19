import React from "react";

const CategoryWithIcon = ({ icon, title }) => {
  const Icon = icon;
  return (
    <div
      className="py-6 px-[56px] flex flex-col justify-center items-center gap-[16px] border-1 rounded-[4px]
     border-Text2/30 transition-all duration-300 hover:border-Button2 hover:bg-Button2 hover:text-white
      cursor-pointer"
    >
      <div className="text-[56px]">{<Icon /> || "Icon not found"}</div>
      <div className="font-poppins text-[16px] leading-[24px]">
        {title || "Title not found"}
      </div>
    </div>
  );
};

export default CategoryWithIcon;
