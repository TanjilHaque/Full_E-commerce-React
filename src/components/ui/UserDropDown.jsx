import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const UserDropDown = () => {
  const dropDownItems = [
    {
      id: 1,
      icon: <FiUser />,
      title: "Manage My Account",
    },
    {
      id: 2,
      icon: <FiShoppingBag />,
      title: "My Order",
    },
    {
      id: 3,
      icon: <MdOutlineCancel />,
      title: "My Cancelations",
    },
    {
      id: 4,
      icon: <FaRegStar />,
      title: "My Reviews",
    },
    {
      id: 5,
      icon: <TbLogout2 />,
      title: "Logout",
    },
  ];
  return (
    <div
      className="backdrop-blur-3xl bg-white/10 p-5 rounded-2xl shadow-lg
      z-20"
    >
      <ul className="flex flex-col justify-start items-start gap-[16px]">
        {dropDownItems.map((item) => (
          <div
            className="cursor-pointer transition-all duration-300 hover:bg-Button2
           p-2 rounded-xl w-full"
          >
            <li
              key={item.id}
              className="flex justify-start items-center gap-[16px]
          text-Text "
            >
              <span className="text-[24px]">{item.icon}</span>
              <span className="text-[14px] font-poppins leading-[21px]">
                {item.title}
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserDropDown;
