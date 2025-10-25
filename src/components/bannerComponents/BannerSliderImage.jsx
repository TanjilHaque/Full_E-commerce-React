import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brush_products from "../../assets/bannerAssets/brush_products.jpg";
import ceramic_products from "../../assets/bannerAssets/ceramic_products.jpg";
import herbal_products from "../../assets/bannerAssets/herbal_products.jpg";
import iphone_discount from "../../assets/bannerAssets/iphone_discount.png";
import sale_and_box from "../../assets/bannerAssets/sale_and_box.jpg";

const BannerSliderImage = () => {
  const bannerImages = [
    { id: 0, name: brush_products },
    { id: 1, name: ceramic_products },
    { id: 2, name: herbal_products },
    { id: 3, name: iphone_discount },
    { id: 4, name: sale_and_box },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bannerSlider">
      <Slider {...settings}>
        {bannerImages.map((item) => (
          <div className="text-center">
            <img
              className="w-full h-[444px] bg-cover object-cover"
              key={item.id}
              src={item.name}
              alt={item.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSliderImage;
