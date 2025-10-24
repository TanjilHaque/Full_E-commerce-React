import React, { useState } from "react";
import StarReviews from "../ui/StarReviews";
import ProductCounter from "../ui/ProductCounter";
import PrimaryBtn from "../ui/PrimaryBtn";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";

const ProductInformation = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [sizeBtnActive, setSizeBtnActive] = useState(null);
  const handleBuyNowBtn = () => {
    console.log("handleBuyNowBtn clicked");
  };
  const handleHeartIconBtn = () => {
    console.log("handleHeartIconBtn clicked");
  };
  return (
    <div>
      <div className="font-inter font-semibold text-[24px] leading-[24px] tracking-[3%] text-Text2 mb-[16px]">
        Havic HV G-92 Gamepad
      </div>
      <div className="flex items-center mb-4">
        <div className="mr-[8px]">{<StarReviews /> || "helo"}</div>
        <div className="font-poppins font-normal text-[14px] leading-[21px] text-Text1 mr-4">
          (150 Reviews)
        </div>
        <div className="mr-4 text-Text1">|</div>
        <div className="font-poppins font-normal text-[14px] leading-[21px] text-Button1">
          In Stock
        </div>
      </div>
      <div className="font-inter font-normal text-[24px] leading-[24px] tracking-[3%] text-Text2 mb-[24px]">
        $192.00
      </div>
      <div className="max-w-[373px] font-poppins font-normal text-[14px] leading-[21px] tracking-normal mb-[24px]">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </div>
      <div className="max-w-[373px] mb-[24px]">
        <hr />
      </div>
      <div className="flex items-center mb-[24px]">
        <div className="font-inter font-normal text-[20px] leading-[20px] tracking-[3%] mr-6">
          Colors:
        </div>
        <span className="w-[18px] h-[18px] rounded-full bg-blue-600 inline-block mr-2 cursor-pointer"></span>
        <span className="w-[18px] h-[18px] rounded-full bg-green-600 inline-block cursor-pointer"></span>
      </div>
      <div className="flex items-center mb-[24px]">
        <div className="font-inter font-normal text-[20px] leading-[20px] tracking-[3%] mr-[24px]">
          Size:{" "}
        </div>
        <div className="flex items-center gap-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSizeBtnActive(size)}
              className={`border-Text1 border rounded w-[32px] h-[32px] flex justify-center items-center
                    cursor-pointer font-poppins font-medium text-[14px] leading-[21px] ${
                      sizeBtnActive === size
                        ? "bg-Secondary2 text-Text border-none"
                        : `text-Button bg-white `
                    }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mb-[40px]">
        <ProductCounter></ProductCounter>
        <PrimaryBtn
          px={48}
          py={10}
          text={"Buy Now"}
          onClick={handleBuyNowBtn}
        ></PrimaryBtn>
        <span
          onClick={handleHeartIconBtn}
          className="size-[40px] border-Text1 border rounded flex justify-center items-center
          cursor-pointer text-2xl transition-all duration-300 hover:bg-Button2 hover:text-white"
        >
          <IoIosHeartEmpty />
        </span>
      </div>
      <div
        className="flex gap-4 items-center pt-[16px] pl-[16px] pb-[16px]
       border border-Text1 max-w-[373px] rounded-t-[4px]"
      >
        <div className="icon text-[40px]">
          <TbTruckDelivery />
        </div>
        <div className="flex flex-col gap-2">
          <div className="title font-poppins text-[16px] leading-[24px] font-medium tracking-normal">
            Free Delivery
          </div>
          <div className="link cursor-pointer font-poppins font-medium text-[12px] leading-[18px] tracking-normal underline">
            Enter your postal code for Delivery Availability
          </div>
        </div>
      </div>
      <div
        className="flex gap-4 items-center pt-[16px] pl-[16px] pb-[16px] 
     border border-t-0 border-Text1 max-w-[373px] rounded-b-[4px]"
      >
        <div className="icon text-[40px]">
          <TfiReload />
        </div>
        <div className="flex flex-col gap-2">
          <div className="title font-poppins text-[16px] leading-[24px] font-medium tracking-normal">
            Return Delivery
          </div>
          <div className="link font-poppins font-medium text-[12px] leading-[18px] tracking-normal">
            Free 30 Days Delivery Returns.{" "}
            <span className="underline decoration-gray-800 cursor-pointer">
              Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
