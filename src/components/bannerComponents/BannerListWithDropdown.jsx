import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { bannerCategoryItems } from "../../Data/data";

const BannerListWithDropdown = () => {
  return (
    <div>
      <ul className="flex flex-col justify-center items-start gap-[30px]">
        {bannerCategoryItems.map((item) => (
          <li
            className="text-Text2 font-poppins leading-[24px]
            flex justify-between items-center w-[217px] cursor-pointer
            duration-300 hover:bg-gray-200 hover:pl-4"
            key={item.id}
          >
            <span>{item.name || "Hi there"}</span>
            {item.dropDown ? (
              <span className="text-xl">
                <RiArrowRightSLine />
              </span>
            ) : (
              <span></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BannerListWithDropdown;
