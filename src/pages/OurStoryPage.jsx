import React from "react";
import BreadCrumb from "../components/commonComponents/BreadCrumb";
import ourStoryImg from "../assets/bgAssets/ourStory.png";
import StoryCards from "../components/ourStoryComponents/StoryCards";
import EmployeeSlider from "../components/ourStoryComponents/EmployeeSlider";
import CustomerService from "../components/homeComponents/CustomerService";

const OurStoryPage = () => {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
      <div className="container mx-auto">
        <div className="ourStory flex justify-between items-center mb-[140px]">
          <div className="ourStoryDesc flex flex-col justify-start items-start">
            <h1
              className="font-inter font-semibold text-[54px]
             leading-[64px] tracking-[6%]"
            >
              Our Story
            </h1>
            <p
              className="max-w-[525px] font-poppins font-normal text-[16px]
             leading-[26px] tracking-[0%] text-Text2 mt-[40px] mb-[24px]"
            >
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p
              className="max-w-[525px] font-poppins font-normal text-[16px]
             leading-[26px] tracking-[0%] text-Text2"
            >
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="ourStoryImage">
            <img src={ourStoryImg} alt="ourStoryImg" />
          </div>
        </div>
        <div className="mb-[140px]">
          <StoryCards></StoryCards>
        </div>
        <div>
          <EmployeeSlider></EmployeeSlider>
        </div>
        <div className="pt-[100px]">
          <CustomerService></CustomerService>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
