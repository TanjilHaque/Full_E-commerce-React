import React from "react";
import TopBar from "../commonComponents/TopBar";
import Navbar from "../commonComponents/Navbar";
import Footer from "../commonComponents/Footer";
import BannerListWithDropdown from "../bannerComponents/BannerListWithDropdown";
import BannerSliderImage from "../bannerComponents/BannerSliderImage";
import Banner from "../commonComponents/Banner";

const HomePage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      {/* <Footer></Footer> */}
      {/* <BannerListWithDropdown></BannerListWithDropdown> */}
      {/* <BannerSliderImage></BannerSliderImage> */}
      <Banner></Banner>
    </div>
  );
};

export default HomePage;
