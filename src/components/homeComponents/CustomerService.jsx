import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { PiFireTruck } from "react-icons/pi";
import { SlEarphonesAlt } from "react-icons/sl";

const CustomerService = () => {
  const services = [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      logo: <PiFireTruck />,
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      logo: <SlEarphonesAlt />,
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      logo: <GoShieldCheck />,
    },
  ];
  return (
    <div className="py-[140px] container mx-auto">
      <div className="flex justify-center items-center gap-[88px]">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <div
              className="w-[50px] h-[50px] text-[24px] font-bold bg-Button rounded-full text-white outline-[#c1c0c1] outline-[12px]
             flex justify-center items-center"
            >
              {item.logo}
            </div>
            <div className="pt-[34px] pb-[8px] font-poppins font-semibold text-[20px] leading-[28px]">
              {item.title}
            </div>
            <div className="font-poppins font-normal text-[14px] leading-[21px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerService;
