import React from "react";
import { LuStore } from "react-icons/lu";

const StoryCard = ({ icon, numbers, title }) => {
  return (
    <div
      className="w-[270px] h-[230px] border border-gray-500 rounded-[4px]
     flex flex-col justify-center items-center hover:shadow-[0_2px_10px_2px_rgba(0,0,0,0.2)]
      hover:bg-Secondary2 hover:text-white transition-all duration-300 storyCardParent"
    >
      <div
        className="h-[80px] w-[80px] rounded-full bg-gray-400 
      flex justify-center items-center storyCardChild"
      >
        <span
          className="text-[40px] text-white bg-black
         h-[60px] w-[60px] rounded-full flex justify-center items-center storyCardGrandChild"
        >
          {icon || <LuStore />}
        </span>
      </div>
      <div
        className="mt-[24px] mb-[12px] font-inter font-bold text-[32px]
       leading-[30px] tracking-[4%]"
      >
        {numbers + "k" || "10.5k"}
      </div>
      <div className="font-poppins font-normal text-[16px] leading-[24px] tracking-[0%]">
        {title || "Sales active on our site"}
      </div>
    </div>
  );
};

export default StoryCard;
