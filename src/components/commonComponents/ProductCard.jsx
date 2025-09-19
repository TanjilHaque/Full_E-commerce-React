import React from "react";
import StarReviews from "../ui/StarReviews";
import productJoystick from "../../assets/productAssets/productJoystick.png";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";

const ProductCard = ({
  image,
  discountPercentage,
  title,
  price,
  rating,
  stock,
}) => {
  return (
    <div className="py-5">
      <div className="cardContainer relative">
        <div className="imageContainer h-[250px] bg-Secondary flex justify-center items-center relative rounded-[4px]">
          <img
            className="object-cover w-[270px] h-[250px]"
            src={image[0] || productJoystick}
            alt="Joy Stick"
          />
          <div className="flex flex-col gap-2 absolute top-3 right-3">
            <span className="likeBtn text-[16px] p-2 w-fit bg-white border-none rounded-full transition-all duration-300 hover:bg-Button2 cursor-pointer hover:text-white">
              <IoHeartOutline />
            </span>
            <span className="eyeBtn text-[16px] p-2 w-fit bg-white border-none rounded-full transition-all duration-300 hover:bg-Button2 cursor-pointer hover:text-white">
              <IoEyeOutline />
            </span>
          </div>
          <div
            className="addToCartBtn w-full py-[9px] flex justify-center bg-black text-white absolute
           font-poppins font-medium text-[16px] leading-[24px] rounded-b-[4px] cursor-pointer"
          >
            Add To Cart
          </div>
        </div>
        {discountPercentage ? (
          <span
            className="discountLabel px-3 py-1 bg-Secondary2 rounded-[4px] font-poppins text-[12px]
     leading-[18px] text-Text absolute top-3 left-3 font-normal"
          >
            {`-${discountPercentage}%`}
          </span>
        ) : null}
      </div>
      <div className="productName font-poppins font-medium text-[16px] leading-[24px] mt-4">
        {title || "HAVIT HV-G92 Gamepad"}
      </div>
      <div className="font-poppins font-medium text-[16px] leading-[24px] flex items-center gap-3 my-2">
        <span className="priceAfterDiscount text-Secondary2">
          {price || "$120"}
        </span>
        <span className="priceBeforeDiscount text-Button">
          <del>
            {(price / (1 - discountPercentage / 100)).toFixed(2) || "$160"}
          </del>
        </span>
      </div>
      <div className="reviews flex items-end gap-2">
        <span className="stars">
          <StarReviews rating={rating}></StarReviews>
        </span>
        <span
          className="numberOfBuyers font-poppins font-semibold text-[14px] leading-[21px] tracking-normal
         text-Text2"
        >
          {`(${stock})` || "(88)"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
