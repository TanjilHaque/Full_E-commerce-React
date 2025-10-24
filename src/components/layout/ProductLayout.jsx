import React, { useRef } from "react";
import Heading from "../commonComponents/Heading";
import TimeLimit from "../commonComponents/TimeLimit";
import ProductCard from "../commonComponents/ProductCard";
import Slider from "react-slick";

import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import CategoryWithIcon from "../ui/CategoryWithIcon";
import ProductSkeleton from "../../skeleton/ProductSkeleton";

// ✅ Custom Arrow Components
const SampleNextArrow = ({ onClick }) => (
  <div
    className="absolute right-[0%] top-[-20%] transform -translate-y-1/2 cursor-pointer z-10
     p-3 rounded-full bg-Secondary text-[18px]"
    onClick={onClick}
  >
    <HiOutlineArrowRight />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="absolute right-[4%] top-[-20%] transform -translate-y-1/2 cursor-pointer z-10
     p-3 rounded-full bg-Secondary text-[18px]"
    onClick={onClick}
  >
    <HiOutlineArrowLeft />
  </div>
);

const ProductLayout = ({
  isArrow,
  timeStamp,
  subtitle,
  title,
  productData,
  rows = 1,
}) => {
  const slideRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: isArrow ? <SampleNextArrow /> : null,
    prevArrow: isArrow ? <SamplePrevArrow /> : null,
    rows: rows,
  };

  const nextSlideBtn = () => {
    slideRef.current.slickNext();
  };

  const prevSlideBtn = () => {
    slideRef.current.slickPrev();
  };

  return (
    <div>
      {/* Heading & Timer */}
      <div className="flex justify-start items-baseline-last gap-[90px]">
        <Heading subtitle={subtitle || null} title={title || null} />
        {/* props in seconds */}
        {timeStamp && <TimeLimit initialSeconds={313453} />}
      </div>

      {/* Slider for product data */}
      {productData ? (
        <div className="mt-[40px] relative">
          <Slider ref={slideRef} {...settings}>
            {productData.map((item, idx) => (
              <div key={idx} className="px-2">
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
          </Slider>
        </div>
      ) : null}
    </div>
  );
};

export default ProductLayout;
