import React, { useState } from "react";
import { useGetProductByNameQuery } from "../../features/Api/ProductApi";
import ProductCard from "../commonComponents/ProductCard";

const PageProdcts = () => {
  const { data, error, isLoading } = useGetProductByNameQuery();
  const [page, setPage] = useState(1);
  const [pagePerShow, setPagePerShow] = useState(9);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  // total pages
  const totalPages = Math.ceil(data?.products.length / pagePerShow);

  // slice products for current page
  const startIdx = (page - 1) * pagePerShow;
  const endIdx = page * pagePerShow;
  const currentProducts = data?.products.slice(startIdx, endIdx);

  return (
    <div className="w-full p-4">
      {/* select how many to show */}
      <div className="flex justify-end items-center gap-2 mb-4">
        <h2 className="font-poppins text-[16px] text-Button">Show</h2>
        <select
          className="bg-slate-200 rounded-sm p-2"
          value={pagePerShow}
          onChange={(e) => {
            setPagePerShow(Number(e.target.value));
            setPage(1); // reset to first page
          }}
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>

      {/* products */}
      <div className="flex flex-wrap justify-between gap-4">
        {currentProducts.map((item, idx) => (
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

      {/* pagination controls */}
      <div className="flex justify-end items-center gap-2 mt-10">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded ${
              page === idx + 1 ? "bg-Secondary2 text-white" : "bg-gray-200"
            }`}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PageProdcts;
