import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const ProductCounter = () => {
  const [productNumber, setProductNumber] = useState(0);
  const handleMinusBtn = () => {
    if (productNumber < 1) {
      return;
    }
    setProductNumber((prev) => prev - 1);
  };
  const handlePlusBtn = () => {
    setProductNumber((prev) => prev + 1);
  };
  return (
    <div className="flex items-center">
      <button
        onClick={handleMinusBtn}
        className="w-[40px] h-[44px] border-Text1 border rounded-tl rounded-bl flex justify-center
        items-center text-[24px] cursor-pointer"
      >
        <FiMinus />
      </button>
      <div
        className="w-[80px] h-[44px] border-t border-b border-Text1 font-poppins font-medium text-[20px] leading-[28px]
       text-Text2 flex justify-center items-center"
      >
        {productNumber}
      </div>
      <button
        onClick={handlePlusBtn}
        className="w-[40px] h-[44px] border-Text1 border rounded-tr rounded-br flex justify-center
        items-center text-[24px] cursor-pointer bg-Button2 text-white"
      >
        <GoPlus />
      </button>
    </div>
  );
};

export default ProductCounter;
