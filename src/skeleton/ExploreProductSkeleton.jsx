import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ExploreProductSkeleton = ({ rows = 2, itemsPerRow = 4 }) => {
  // generate grid similar to product layout
  const skeletonItems = Array.from({ length: rows * itemsPerRow });

  return (
    <div className="container mx-auto mt-[70px]">
      {/* Section Heading */}
      <div className="mb-[60px]">
        <div className="flex justify-between items-center mb-[40px]">
          <div>
            <Skeleton width={120} height={20} />
            <Skeleton width={250} height={35} className="mt-2" />
          </div>
          <Skeleton width={120} height={30} />
        </div>

        {/* Product Skeleton Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6`}>
          {skeletonItems.map((_, idx) => (
            <div key={idx}>
              {/* Product Card Skeleton */}
              <div className="h-[250px] rounded-[4px] overflow-hidden">
                <Skeleton height={250} />
              </div>
              <div className="mt-4">
                <Skeleton width={`80%`} height={20} />
                <Skeleton width={`60%`} height={20} className="mt-2" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Skeleton circle width={20} height={20} />
                <Skeleton width={40} height={15} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button Skeleton */}
      <div className="flex justify-center items-center mt-[60px] mb-[140px]">
        <Skeleton width={180} height={45} borderRadius={8} />
      </div>
    </div>
  );
};

export default ExploreProductSkeleton;
