import React from "react";
import { useGetProductByNameQuery } from "../../features/Api/ProductApi";
import ProductCard from "../commonComponents/ProductCard";

const PageProdcts = () => {
  const { data, error, isLoading } = useGetProductByNameQuery();
  console.log(data);
  return (
    <div className="w-full bg-purple-600">
      <div className="flex justify-end items-center gap-2">
        <h2 className="font-poppins text-[16px] text-Button">Show</h2>
        <select className="bg-slate-200 rounded-sm p-2" name="" id="">
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* products */}
      <div className="flex flex-wrap justify-between">
        {data?.products.map((item, idx) => (
          <div key={idx} className="w-[30%]">
            <ProductCard
              image={item.images}
              discountPercentage={item.discountPercentage}
              title={item.title}
              price={item.price}
              rating={item.rating}
              stock={item.stock}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageProdcts;
