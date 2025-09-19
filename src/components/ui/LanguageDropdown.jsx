import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const LanguageDropdown = () => {
  const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Bangla" },
    { id: 3, name: "French" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);
  const [currentLang, setCurrentLang] = useState("English"); 

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  const selectedLanguage = languages.find(lang => lang.name === currentLang);

  return (
    <div ref={dropDownRef} className="relative">
      <div
        className="flex justify-center items-center gap-x-[8px] md:gap-x-[11px] py-1 px-2 md:py-0 md:px-0" // Adjusted gap, added responsive padding for the button area
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-poppins text-xs md:text-sm leading-tight cursor-pointer"> {/* Adjusted text size for mobile */}
          {selectedLanguage ? selectedLanguage.name : currentLang} {/* Use selectedLanguage if found */}
        </span>
        <span>
          <RiArrowDownSLine className="w-4 h-4 text-gray-400 md:w-5 md:h-5" /> {/* Adjusted icon size */}
        </span>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-[120px] md:w-[150px] origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> {/* Added right-0, z-10, width, and some standard dropdown styling */}
          <ul className="bg-Secondary2 cursor-pointer rounded-md overflow-hidden"> {/* Added rounded-md and overflow-hidden */}
            {languages.map((item) => (
              <li
                key={item.id}
                className={`text-Text text-sm py-[6px] px-[10px] hover:bg-Primary2 transition-all duration-300
                            ${item.name === currentLang ? 'bg-Primary2 font-semibold' : ''}`}
                onClick={() => {
                  setCurrentLang(item.name);
                  setIsOpen(false);
                  console.log("menu item clicked");
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;