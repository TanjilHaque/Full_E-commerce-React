import React from "react";
import Navbar from "../commonComponents/Navbar";
import { Outlet } from "react-router";
import TopBar from "../commonComponents/TopBar";
import Heading from "../commonComponents/Heading";
import Footer from "../commonComponents/Footer";

const RootMainLayout = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootMainLayout;
