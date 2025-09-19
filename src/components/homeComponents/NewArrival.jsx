import React from "react";
import ProductLayout from "../layout/ProductLayout";
import ps5Slim from "../../assets/arrivalAssets/ps5Slim.png";
import amazonSpeaker from "../../assets/arrivalAssets/amazonSpeaker.png";
import gucciPerfume from "../../assets/arrivalAssets/gucciPerfume.png";
import womanWithHat from "../../assets/arrivalAssets/womanWithHat.png";

const NewArrival = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-[60px]">
        <ProductLayout
          isArrow={false}
          timeStamp={false}
          subtitle={"Featured"}
          title={"New Arrival"}
        ></ProductLayout>
      </div>
      <div className="flex justify-between items-center gap-[30px]">
        <div
          className="w-[50%] px-[30px] pt-[90px] bg-black flex justify-center items-end rounded-sm
         relative"
        >
          <img src={ps5Slim} alt="ps5" />
          <div className="absolute bottom-[32px] left-[32px]">
            <h2 className="text-Text font-inter font-semibold text-[24px] leading-[24px]">
              PlayStation 5
            </h2>
            <p
              className="font-poppins font-normal text-[14px] leading-[21px] text-Text
             my-[16px] max-w-[242px]"
            >
              Black and White version of the PS5 coming out on sale.
            </p>
            <button
              className="font-poppins font-medium text-[16px] leading-[24px]
             text-white border-b border-Secondary cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[32px] w-[50%]">
          <div className="w-full bg-black flex justify-end items-center h-[50%] rounded-sm relative">
            <img src={womanWithHat} alt="woman" />
            <div className="absolute bottom-[32px] left-[32px]">
              <h2 className="text-Text font-inter font-semibold text-[24px] leading-[24px]">
                Women’s Collections
              </h2>
              <p
                className="font-poppins font-normal text-[14px] leading-[21px] text-Text
             my-[16px] max-w-[242px]"
              >
                Featured woman collections that give you another vibe.
              </p>
              <button
                className="font-poppins font-medium text-[16px] leading-[24px]
             text-white border-b border-Secondary cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[100px] h-[50%] w-full">
            <div className="bg-black w-[50%] flex justify-center items-center p-[30px] rounded-sm relative">
              <img
                className="drop-shadow-[0_0_60px_rgba(250,220,255,0.4)]"
                src={amazonSpeaker}
                alt="speaker"
              />
              <div className="absolute bottom-[32px] left-[32px]">
                <h2 className="text-Text font-inter font-semibold text-[24px] leading-[24px]">
                  Speakers
                </h2>
                <p
                  className="font-poppins font-normal text-[14px] leading-[21px] text-Text
             my-[16px] max-w-[242px]"
                >
                  Amazon wireless speakers
                </p>
                <button
                  className="font-poppins font-medium text-[16px] leading-[24px]
             text-white border-b border-Secondary cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="bg-black w-[50%] flex justify-center items-center p-[30px] rounded-sm relative">
              <img
                className="drop-shadow-[0_0_60px_rgba(250,220,255,0.4)]"
                src={gucciPerfume}
                alt="perfume"
              />
              <div className="absolute bottom-[32px] left-[32px]">
                <h2 className="text-Text font-inter font-semibold text-[24px] leading-[24px]">
                  Perfume
                </h2>
                <p
                  className="font-poppins font-normal text-[14px] leading-[21px] text-Text
             my-[16px] max-w-[242px]"
                >
                  GUCCI INTENSE OUD EDP
                </p>
                <button
                  className="font-poppins font-medium text-[16px] leading-[24px]
             text-white border-b border-Secondary cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
