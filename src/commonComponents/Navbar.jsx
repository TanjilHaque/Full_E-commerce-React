import React, { useState } from "react";
import { NavLink } from "react-router"; // Ensure this is from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Import icons for hamburger menu

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItem = [
    { id: 1, item: "Home", name: "home" },
    { id: 2, item: "Contact", name: "contact" },
    { id: 3, item: "About", name: "about" },
    { id: 4, item: "Sign Up", name: "signUp" },
  ];

  return (
    <div className="border-b border-Button">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:py-[40px] md:pb-[16px]">
        {/* Logo */}
        <div
          className="font-inter font-bold text-[20px] leading-tight tracking-[3%] text-Text2
                     md:text-[24px] md:leading-[24px]"
        >
          Exclusive
        </div>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-x-6 lg:gap-x-[48px]">
            {navItem.map((nav) => (
              <NavLink
                className="cursor-pointer font-poppins leading-[24px] tracking-normal text-Text2 text-[14px]
                           md:text-[16px] navbarBottom hover:underline hover:underline-offset-2 transition-all duration-200"
                key={nav.id}
                to={`/${nav.name}`}
              >
                {nav.item}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Right Section: Search (Icon only for mobile), Cart, Heart (Desktop only), Hamburger (Mobile only) */}
        <div className="flex items-center gap-x-3 md:gap-x-6"> {/* Adjusted gap-x */}
          {/* Search Input (Desktop) vs Search Icon (Mobile) */}
          <div className="hidden md:flex items-center bg-Secondary pr-[12px] pl-[20px] py-[7px] rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?" // Desktop placeholder
              className="w-[200px] placeholder:text-[12px] border-none bg-Secondary font-poppins focus:outline-none"
            />
            <span className="text-[24px] text-gray-500">
              <CiSearch />
            </span>
          </div>
          
          {/* Search Icon for Mobile */}
          <span className="md:hidden text-[24px] cursor-pointer text-Text2"> {/* Adjusted icon size */}
            <CiSearch />
          </span>

          {/* Heart Icon (Desktop Only - moved from here to mobile menu for small screens) */}
          <span className="hidden md:block text-[28px] md:text-[32px] cursor-pointer text-Text2">
            <IoIosHeartEmpty />
          </span>

          {/* Cart Icon (Always visible, adjusted size) */}
          <span className="text-[24px] md:text-[32px] cursor-pointer text-Text2"> {/* Adjusted icon size */}
            <IoCartOutline />
          </span>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-Text2 text-[28px] cursor-pointer"
            >
              {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (conditionally rendered below the main navbar) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 border-t border-Button">
          <ul className="flex flex-col items-start px-4 space-y-4"> {/* Aligned items to start, added px */}
            {navItem.map((nav) => (
              <NavLink
                className="cursor-pointer font-poppins text-Text2 text-[16px] navbarBottom hover:underline w-full py-2" // Added w-full py-2 for better tap area
                key={nav.id}
                to={`/${nav.name}`}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {nav.item}
              </NavLink>
            ))}
            {/* Added Heart Icon inside mobile menu */}
            <li className="w-full py-2">
              <span className="cursor-pointer font-poppins text-Text2 text-[16px] flex items-center gap-x-2">
                <IoIosHeartEmpty className="text-[24px]" /> Wishlist
              </span>
            </li>
            {/* You could add a search input here if you prefer a full search experience in the menu */}
            {/* <li className="w-full py-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;