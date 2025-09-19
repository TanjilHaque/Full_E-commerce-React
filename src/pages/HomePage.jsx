import React from "react";
import TopBar from "../components/commonComponents/TopBar";
import Navbar from "../components/commonComponents/Navbar";
import Banner from "../components/commonComponents/Banner";
import FlashSale from "../components/homeComponents/FlashSale";
import BrowseCategory from "../components/homeComponents/BrowseCategory";
import BestSellingProducts from "../components/homeComponents/BestSellingProducts";
import MusicExperience from "../components/homeComponents/MusicExperience";
import ExploreProducts from "../components/homeComponents/ExploreProducts";
import NewArrival from "../components/homeComponents/NewArrival";
import CustomerService from "../components/homeComponents/CustomerService";
import Footer from "../components/commonComponents/Footer";

const HomePage = () => {
  return (
    <div>
      {/* <TopBar></TopBar>
      <Navbar></Navbar> */}
      <Banner></Banner>
      <FlashSale></FlashSale>
      <BrowseCategory></BrowseCategory>
      <BestSellingProducts></BestSellingProducts>
      <MusicExperience></MusicExperience>
      <ExploreProducts></ExploreProducts>
      <NewArrival></NewArrival>
      <CustomerService></CustomerService>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default HomePage;
