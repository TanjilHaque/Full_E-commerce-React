import React from "react";
import StarReviews from "../ui/StarReviews";

const ProductInformation = () => {
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
      <div>
        <div>Size: </div>
        <div>
          <span>XS</span>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductInformation;
