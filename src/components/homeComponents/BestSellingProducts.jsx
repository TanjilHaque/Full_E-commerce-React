import React from "react";
import ProductLayout from "../layout/ProductLayout";
import { bestSellingProducts } from "../../Data/data";
import PrimaryBtn from "../ui/PrimaryBtn";
import { useBestSellingProductQuery } from "../../features/Api/ProductApi";
import ProductSkeleton from "../../skeleton/ProductSkeleton";

const BestSellingProducts = () => {
  const handleViewAllBtn = () => {
    console.log("handleViewAllBtn clicked");
  };
  const { data, error, isLoading } = useBestSellingProductQuery();
  return (
    <div className="container mx-auto mt-[70px] relative mb-[140px]">
      <div className="mb-[60px]">
        {data && !isLoading ? (
          <ProductLayout
            isArrow={false}
            timeStamp={false}
            subtitle={"This Month"}
            title={"Best Selling Products"}
            productData={data?.products || []}
          ></ProductLayout>
        ) : (
          <div className="flex justify-between items-center gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-[7.5%] right-0">
        <PrimaryBtn
          px={48}
          py={16}
          text={"View All"}
          onClick={handleViewAllBtn}
        ></PrimaryBtn>
      </div>
    </div>
  );
};

export default BestSellingProducts;
