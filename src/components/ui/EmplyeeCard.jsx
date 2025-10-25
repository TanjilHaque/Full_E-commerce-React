import React from "react";
import employee1 from "../../assets/employeeAssets/employee1.png";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

const EmplyeeCard = ({ image, name, designation }) => {
  return (
    <div className="flex flex-col">
      <div>
        <img src={image || employee1} alt="employee1" />
      </div>
      <div
        className="mt-[32px] mb-[8px] font-inter font-medium text-[32px]
       leading-[30px] tracking-[4%]"
      >
        {name || "Tom Cruise"}
      </div>
      <div className="mb-[16px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0%]">
        {designation || "Founder & Chairman"}
      </div>
      <div className="flex justify-start items-center gap-4 text-[24px]">
        <span className="transition-all duration-300 hover:text-Secondary2 cursor-pointer">
          <CiTwitter />
        </span>
        <span className="transition-all duration-300 hover:text-Secondary2 cursor-pointer">
          <CiInstagram />
        </span>
        <span className="transition-all duration-300 hover:text-Secondary2 cursor-pointer">
          <RiLinkedinLine />
        </span>
      </div>
    </div>
  );
};

export default EmplyeeCard;
