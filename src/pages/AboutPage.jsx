import React from "react";
import BreadCrumb from "../components/commonComponents/BreadCrumb";
import BannerListWithDropdown from "../components/bannerComponents/BannerListWithDropdown";
import LeftSideCategory from "../components/aboutComponents/LeftSideCategory";
import PageProdcts from "../components/aboutComponents/PageProdcts";

const AboutPage = () => {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[30%] bg-red-400">
            <LeftSideCategory></LeftSideCategory>
          </div>
          <div className="w-[70%] bg-blue-500">
            <PageProdcts></PageProdcts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
