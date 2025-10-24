import React from "react";

const Heading = ({ subtitle, title }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-[30px]">
      <span
        className="subTitle font-poppins font-semibold text-[16px]
       leading-[20px] text-Secondary2 ml-[40px]"
      >
        {subtitle || null}
      </span>
      <span
        className="title font-inter font-semibold text-[36px]
       leading-[48px] tracking-[4px] text-Text2"
      >
        {title || null}
      </span>
    </div>
  );
};

export default Heading;
