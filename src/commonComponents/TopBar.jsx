import React from "react";
import LanguageDropdown from "../components/LanguageDropdown";

const TopBar = () => {
  return (
    <div className="">
      <div className="bg-Button text-Text py-[12px] md:py-3"> {/* Added md:py-3 for slightly more padding on larger screens */}
        <div className="container mx-auto flex justify-between items-center px-4"> {/* Added px-4 for horizontal padding on all screens */}
          {/* Left side: This div could be for a logo or a mobile menu toggle */}
          <div className="flex-shrink-0">
            {/* Example: A placeholder for your logo or mobile menu */}
            {/* <span className="font-bold text-lg">My Logo</span> */}
          </div>

          {/* Center: Sale Banner - Responsive Text */}
          <div className="flex-grow text-center mx-2 md:mx-4 overflow-hidden"> {/* Adjusted mx for small screens, added overflow-hidden */}
            {/* Full text for medium and larger screens */}
            <p className="hidden md:block font-poppins text-sm leading-tight whitespace-nowrap">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <span className="ml-[8px] underline underline-offset-1 cursor-pointer font-semibold">Shop Now</span> {/* Added font-semibold for 'Shop Now' */}
            </p>
            {/* Condensed text for small screens */}
            <p className="md:hidden block font-poppins text-xs leading-tight whitespace-nowrap overflow-x-auto scrollbar-hide"> {/* Changed text-sm to text-xs, added overflow-x-auto for potential scroll, scrollbar-hide for aesthetics */}
              Summer Sale - 50% Off!
              <span className="ml-[4px] underline underline-offset-1 cursor-pointer font-semibold">Shop Now</span> {/* Adjusted ml for small screens */}
            </p>
          </div>

          {/* Right side: Language Dropdown */}
          <div className="flex-shrink-0"> {/* Use flex-shrink-0 to prevent it from shrinking */}
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;