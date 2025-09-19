import React, { useRef } from "react";
import Slider from "react-slick";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import CategoryWithIcon from "../ui/CategoryWithIcon";
import Heading from "../commonComponents/Heading";
import TimeLimit from "../commonComponents/TimeLimit";

// ✅ Custom Arrow Components
const SampleNextArrow = ({ onClick }) => (
  <div
    className="absolute right-[0%] top-[-35%] transform -translate-y-1/2 cursor-pointer z-10
     p-3 rounded-full bg-Secondary text-[18px]"
    onClick={onClick}
  >
    <HiOutlineArrowRight />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="absolute right-[4%] top-[-35%] transform -translate-y-1/2 cursor-pointer z-10
     p-3 rounded-full bg-Secondary text-[18px]"
    onClick={onClick}
  >
    <HiOutlineArrowLeft />
  </div>
);

const CategoryLayout = ({
  isArrow,
  timeStamp,
  subtitle,
  title,
  categoryData,
}) => {
  const slideRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: isArrow ? <SampleNextArrow /> : null,
    prevArrow: isArrow ? <SamplePrevArrow /> : null,
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
        <Heading
          subtitle={subtitle || "Sub Title"}
          title={title || "Title Part"}
        />
        {/* props in seconds */}
        {timeStamp && <TimeLimit initialSeconds={313453} />}
      </div>

      {/* Slider for product data */}
      {categoryData ? (
        <div className="mt-[40px] relative">
          <Slider ref={slideRef} {...settings}>
            {categoryData.map((item, idx) => (
              <div key={idx} className="px-2">
                <CategoryWithIcon icon={item.icon} title={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      ) : null}
    </div>
  );
};

export default CategoryLayout;
