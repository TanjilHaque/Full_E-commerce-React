import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { LuStore, LuUsers } from "react-icons/lu";
import StoryCard from "../ui/StoryCard";

const StoryCards = () => {
  const storyCardData = [
    {
      id: 1,
      numbers: 10.5,
      title: "Salers active on our site",
      icon: <LuStore />,
    },
    {
      id: 2,
      numbers: 33,
      title: "Monthly Product Sales",
      icon: <AiOutlineDollar />,
    },
    {
      id: 3,
      numbers: 45.5,
      title: "Customer active in our site",
      icon: <LuUsers />,
    },
    {
      id: 4,
      numbers: 25,
      title: "Annual gross sale in our site",
      icon: <FaSackDollar />,
    },
  ];
  return (
    <div className="flex justify-between items-center">
      {storyCardData.map((item) => (
        <StoryCard
          icon={item.icon}
          numbers={item.numbers}
          title={item.title}
          key={item.id}
        ></StoryCard>
      ))}
    </div>
  );
};

export default StoryCards;
