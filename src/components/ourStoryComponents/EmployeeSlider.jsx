import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { employeeData } from "../../Data/employeeData";
import EmplyeeCard from "../ui/EmplyeeCard";

const EmployeeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="employeeSlider">
      <Slider {...settings}>
        {employeeData.map((item) => (
          <EmplyeeCard
            image={item.image}
            name={item.name}
            designation={item.designation}
          ></EmplyeeCard>
        ))}
      </Slider>
    </div>
  );
};

export default EmployeeSlider;
