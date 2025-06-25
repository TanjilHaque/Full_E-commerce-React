import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brush_products from "../assets/bannerImages/brush_products.jpg";
import ceramic_products from "../assets/bannerImages/ceramic_products.jpg";
import herbal_products from "../assets/bannerImages/herbal_products.jpg";
import iphone_discount from "../assets/bannerImages/iphone_discount.png";
import sale_and_box from "../assets/bannerImages/sale_and_box.jpg";

const BannerSliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="text-center">
          <img
            className="w-[892px] h-[344px] bg-cover"
            src={brush_products}
            alt="brush_products"
          />
        </div>
        <div className="text-center">
          <img
            className="w-[892px] h-[344px] bg-cover"
            src={ceramic_products}
            alt="ceramic_products"
          />
        </div>
        <div className="text-center">
          <img
            className="w-[892px] h-[344px] bg-cover"
            src={herbal_products}
            alt="herbal_products"
          />
        </div>
        <div className="text-center">
          <img
            className="w-[892px] h-[344px] bg-cover"
            src={iphone_discount}
            alt="iphone_discount"
          />
        </div>
        <div className="text-center">
          <img
            className="w-[892px] h-[344px] bg-cover"
            src={sale_and_box}
            alt="sale_and_box"
          />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSliderImage;
