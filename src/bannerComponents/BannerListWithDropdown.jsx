import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const BannerListWithDropdown = () => {
  const listMenuItems = [
    {
      id: 0,
      name: "Women's Fashion",
      dropDown: true,
    },
    {
      id: 1,
      name: "Men's Fashion",
      dropDown: true,
    },
    {
      id: 2,
      name: "Electronics",
      dropDown: false,
    },
    {
      id: 3,
      name: "Home & Lifestyle",
      dropDown: false,
    },
    {
      id: 4,
      name: "Medicine",
      dropDown: false,
    },
    {
      id: 5,
      name: "Sports & Outdoor",
      dropDown: false,
    },
    {
      id: 6,
      name: "Baby's & Toys",
      dropDown: false,
    },
    {
      id: 7,
      name: "Groceries & Pets",
      dropDown: false,
    },
    {
      id: 8,
      name: "Health & Beauty",
      dropDown: false,
    },
  ];

  return (
    <div>
      <ul className="flex flex-col justify-center items-start gap-[16px]">
        {listMenuItems.map((item) => (
          <li
            className="text-Text2 font-poppins
            flex justify-between items-center w-[217px] cursor-pointer
            duration-300 hover:bg-gray-200 hover:pl-4"
            key={item.id}
          >
            <span>{item.name || "Hi there"}</span>
            {item.dropDown ? (
              <span className="text-xl">
                <RiArrowRightSLine />
              </span>
            ) : (
              <span></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BannerListWithDropdown;
