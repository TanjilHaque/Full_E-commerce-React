import React from "react";
import BannerListWithDropdown from "../bannerComponents/BannerListWithDropdown";
import BannerSliderImage from "../bannerComponents/BannerSliderImage";

const Banner = () => {
  return (
    <div
      className="m-0 pl-[135px] pr-[135px]
     pb-[140px] pt-0
    flex justify-center items-center gap-[45px]"
    >
      <div className="w-[22%] border-r border-[#b2b2b2] pt-[40px]">
        <BannerListWithDropdown></BannerListWithDropdown>
      </div>
      <div className="w-[78%] pt-[40px]">
        <BannerSliderImage></BannerSliderImage>
      </div>
    </div>
  );
};

export default Banner;
