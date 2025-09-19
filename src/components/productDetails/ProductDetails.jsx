import React, { useState } from "react";
import BreadCrumb from "../commonComponents/BreadCrumb";
import ProductInformation from "./ProductInformation";
import mainPs5 from "../../assets/ps5Assets/mainPs5.png";
import ps5_2 from "../../assets/ps5Assets/ps5_2.png";
import ps5_3 from "../../assets/ps5Assets/ps5_3.png";
import ps5_4 from "../../assets/ps5Assets/ps5_4.png";

const ProductDetails = () => {
  const [mainImageShown, setMainImageShown] = useState(mainPs5);
  const [activeImageId, setActiveImageId] = useState(1); // ✅ track active image by id

  const productDetailsInfo = [
    { id: 1, image: mainPs5 },
    { id: 2, image: ps5_2 },
    { id: 3, image: ps5_3 },
    { id: 4, image: ps5_4 },
  ];

  return (
    <div>
      <BreadCrumb />
      <div className="container mx-auto">
        <div className="flex w-full">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 basis-[14.53%] mr-[2.56%]">
            {productDetailsInfo.map((item) => (
              <div
                key={item.id}
                className="w-full cursor-pointer"
                onClick={() => {
                  setMainImageShown(item.image);
                  setActiveImageId(item.id); // ✅ set clicked image as active
                }}
              >
                <img
                  className={`w-full aspect-[170/138] object-cover ${
                    activeImageId === item.id
                      ? "border-2 border-blue-500"
                      : "border border-transparent"
                  }`}
                  src={item.image}
                  alt={`Thumbnail ${item.id}`}
                />
              </div>
            ))}
          </div>

          {/* Main image */}
          <div className="basis-[42.74%] mr-[5.98%]">
            <img
              className="w-full h-full object-cover"
              src={mainImageShown}
              alt="Main product"
            />
          </div>

          {/* Info */}
          <div className="basis-[34.19%]">
            <ProductInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
