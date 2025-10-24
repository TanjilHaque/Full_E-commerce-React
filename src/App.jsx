import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import RootMainLayout from "./components/layout/RootMainLayout";
import Banner from "./components/commonComponents/Banner";
import FlashSale from "./components/homeComponents/FlashSale";
import BrowseCategory from "./components/homeComponents/BrowseCategory";
import BestSellingProducts from "./components/homeComponents/BestSellingProducts";
import MusicExperience from "./components/homeComponents/MusicExperience";
import ExploreProducts from "./components/homeComponents/ExploreProducts";
import NewArrival from "./components/homeComponents/NewArrival";
import CustomerService from "./components/homeComponents/CustomerService";
import BreadCrumb from "./components/commonComponents/BreadCrumb";
import AboutPage from "./pages/AboutPage";
import ProductDetails from "./components/productDetails/ProductDetails";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootMainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
