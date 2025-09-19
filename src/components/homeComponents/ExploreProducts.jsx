import React from "react";
import ProductLayout from "../layout/ProductLayout";
import { useGetProductByNameQuery } from "../../features/Api/ProductApi";
import PrimaryBtn from "../ui/PrimaryBtn";
import ExploreProductSkeleton from "../../skeleton/ExploreProductSkeleton";

const ExploreProducts = () => {
  const { data, error, isLoading } = useGetProductByNameQuery();
  if (isLoading) return <ExploreProductSkeleton />;
  return (
    <div className="container mx-auto mt-[70px]">
      <div className="mb-[60px]">
        <ProductLayout
          isArrow={true}
          timeStamp={false}
          subtitle={"Our Products"}
          title={"Explore Our Products"}
          productData={data?.products || []}
          rows={2}
        ></ProductLayout>
      </div>
      <div className="flex justify-center items-center mt-[60px] mb-[140px]">
        <PrimaryBtn text={"View All Products"}></PrimaryBtn>
      </div>
    </div>
  );
};

export default ExploreProducts;
