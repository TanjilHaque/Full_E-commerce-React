//3 * 24 * 60 * 60 + 23 * 3600 + 19 * 60 + 56

import React, { useEffect, useState } from "react";

const TimeLimit = ({ initialSeconds }) => {
  const [time, setTime] = useState(initialSeconds);

  useEffect(() => {
    if (time <= 0) return; // stop if already 0

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  // Breakdown
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const timeParameters = [
    { id: 1, timeType: days.toString().padStart(2, "0"), timeTitle: "Days" },
    { id: 2, timeType: hours.toString().padStart(2, "0"), timeTitle: "Hours" },
    {
      id: 3,
      timeType: minutes.toString().padStart(2, "0"),
      timeTitle: "Minutes",
    },
    {
      id: 4,
      timeType: seconds.toString().padStart(2, "0"),
      timeTitle: "Seconds",
    },
  ];

  return (
    <div className="flex justify-start items-center gap-[40px]">
      {timeParameters.map((item) => (
        <div
          key={item.id}
          className="timeItem flex flex-col justify-center items-start"
        >
          <span className="font-poppins font-medium text-[12px] leading-[18px] text-Text2">
            {item.timeTitle}
          </span>
          <span className="font-inter font-bold text-[32px] leading-[30px] tracking-[4px] text-Text2">
            {item.timeType}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TimeLimit;
