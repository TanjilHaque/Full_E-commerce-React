import React, { useEffect } from "react";
import ProductLayout from "../layout/ProductLayout";
import PrimaryBtn from "../ui/PrimaryBtn";
import { flashSaleProducts } from "../../Data/data";
import { useGetProductByNameQuery } from "../../features/Api/ProductApi";
import LoadingScreen from "../ui/LoadingScreen";
import ProductSkeleton from "../../skeleton/ProductSkeleton";

const FlashSale = () => {
  const { data, error, isLoading } = useGetProductByNameQuery();
  console.log(data);
  console.log(isLoading);
  console.log(error);
  const handleViewAllProductsBtn = () => {
    console.log("handleViewAllProductsBtn clicked");
  };

  return (
    <div className="container mx-auto">
      <div className="mb-[60px]">
        {data && !isLoading ? (
          <ProductLayout
            isArrow={true}
            timeStamp={true}
            subtitle={"Today's"}
            title={"Flash Sale"}
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
      <div className="flex justify-center items-center">
        <PrimaryBtn
          onClick={handleViewAllProductsBtn}
          px={48}
          py={16}
          text={"View All Products"}
        ></PrimaryBtn>
      </div>
    </div>
  );
};

export default FlashSale;
