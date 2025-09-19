import React from "react";
import BannerListWithDropdown from "../bannerComponents/BannerListWithDropdown";
import { RiArrowRightSLine } from "react-icons/ri";

const LeftSideCategory = () => {
  const colorsAvailable = [
    {
      id: 1,
      title: "Color 1",
      color: "blue",
    },
    {
      id: 2,
      title: "Color 2",
      color: "red",
    },
    {
      id: 3,
      title: "Color 3",
      color: "green",
    },
  ];
  return (
    <div className="w-full">
      <div className="pb-[60px]">
        <div className="font-bold text-[20px] pb-[50px]">Shop By Category</div>
        <BannerListWithDropdown></BannerListWithDropdown>
        <div className="font-bold text-[20px] py-[50px]">Shop By Color</div>
        <ul className="flex flex-col justify-center items-start gap-[30px]">
          {colorsAvailable.map((item) => (
            <li
              className="text-Text2 font-poppins leading-[24px]
            flex justify-between items-center w-[217px] cursor-pointer
            duration-300 hover:bg-gray-200 hover:pl-4"
              key={item.id}
            >
              <span>{item.title || "Hi there"}</span>
              <span
                className={`w-[18px] h-[18px] rounded-full`}
                style={{ backgroundColor: item.color }}
              ></span>
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
    </div>
  );
};

export default LeftSideCategory;
