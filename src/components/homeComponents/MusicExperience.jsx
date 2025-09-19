import React, { useEffect, useState } from "react";
import PrimaryBtn from "../ui/PrimaryBtn";
import jblSoundBox from "../../assets/globalAssets/JBLSoundBox.png";

const MusicExperience = () => {
  const handleBuyNowBtn = () => {
    console.log("handle buy now btn clicked from music experience part");
  };

  // === Timer Logic ===
  const initialSeconds = 3 * 24 * 60 * 60 + 23 * 3600 + 19 * 60 + 56; // example
  const [time, setTime] = useState(initialSeconds);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // Breakdown
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  // Prepare array (to map UI directly)
  const timeParameters = [
    { id: 1, value: days, label: "Days" },
    { id: 2, value: hours, label: "Hours" },
    { id: 3, value: minutes, label: "Minutes" },
    { id: 4, value: seconds, label: "Seconds" },
  ];

  return (
    <div className="container mx-auto bg-Button px-[56px] py-[69px]">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-poppins font-semibold text-[16px] leading-[20px] text-Button1">
            Categories
          </div>
          <div
            className="text-Text font-inter font-semibold
         text-[48px] leading-[60px] tracking-[4%] my-[32px]"
          >
            Enhance Your <br /> Music Experience
          </div>

          {/* Timer mapped here */}
          <div className="flex justify-start items-center gap-[24px]">
            {timeParameters.map((item) => (
              <span
                key={item.id}
                className="w-[62px] h-[62px] rounded-full
             bg-Primary flex flex-col justify-center items-center"
              >
                <h1
                  className="font-poppins font-semibold text-[16px] leading-[20px]
             text-Text2"
                >
                  {item.value.toString().padStart(2, "0")}
                </h1>
                <p
                  className="font-poppins font-normal text-[11px] leading-[18px]
             text-Text2"
                >
                  {item.label}
                </p>
              </span>
            ))}
          </div>

          <div className="mt-[40px]">
            <PrimaryBtn
              px={48}
              py={16}
              text={"Buy Now"}
              onClick={handleBuyNowBtn}
              bgColor={"bg-Button1"}
            />
          </div>
        </div>

        <div className="bg-black">
          <img
            className="drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]"
            src={jblSoundBox}
            alt="sound_box"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicExperience;
