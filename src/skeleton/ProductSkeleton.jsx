import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-[368px] animate-pulse">
      {/* Card Container */}
      <div className="relative">
        {/* Image Skeleton */}
        <div className="h-[250px] w-full bg-gray-200 rounded-[4px] relative flex justify-center items-center">
          {/* Like & Eye buttons */}
          <div className="flex flex-col gap-2 absolute top-3 right-3">
            <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
            <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
          </div>

          {/* Add to cart button placeholder */}
          <div className="w-full h-[40px] bg-gray-300 absolute bottom-0 rounded-b-[4px]"></div>
        </div>

        {/* Discount Label */}
        <span className="px-6 py-2 bg-gray-300 rounded-[4px] absolute top-3 left-3"></span>
      </div>

      {/* Title */}
      <div className="h-5 w-3/4 bg-gray-300 rounded mt-4"></div>

      {/* Price */}
      <div className="flex items-center gap-3 my-2">
        <span className="h-5 w-16 bg-gray-300 rounded"></span>
        <span className="h-5 w-12 bg-gray-300 rounded"></span>
      </div>

      {/* Reviews */}
      <div className="flex items-center gap-2 mt-2">
        <span className="h-4 w-24 bg-gray-300 rounded"></span>
        <span className="h-4 w-10 bg-gray-300 rounded"></span>
      </div>
    </div>
  );
};

export default ProductSkeleton;
