import React from "react";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { TbCopyright } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import GooglePlayButton from "../assets/GooglePlayButton.png";
import AppStoreButton from "../assets/AppStoreButton.png";
import Qr_code from "../assets/Qr_Code.png";
import { Link } from "react-router"; // Ensure this is from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-Button text-Text font-poppins pt-[80px] px-4"> {/* Added px-4 for horizontal padding on all screens, pt is fine */}
      <div className="container mx-auto flex flex-col">
        {/* Main Footer Content Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
                     gap-y-8 sm:gap-y-12 md:gap-y-16
                     gap-x-8 sm:gap-x-12 lg:gap-x-16 xl:gap-x-[87px]" /* Changed from flex to responsive grid */
        >
          {/* Column 1: Exclusive (Logo, Subscribe, Email Input) */}
          <div className="w-full"> {/* Ensure it takes full width on its grid column */}
            <div className="font-inter font-bold text-[24px] mb-[24px]">
              Exclusive
            </div>
            <div className="footerTextSubHeading mb-[24px]">Subscribe</div>
            <div className="footerTextList mb-[16px]">
              Get 10% off your first order
            </div>
            <div className="relative flex items-center border-[1.5px] border-Text w-full max-w-[250px] md:max-w-none"> {/* Added w-full and max-w */}
              <input
                type="text"
                placeholder="Enter your email"
                className="py-[12px] pl-[16px] pr-[32px] border-none bg-Button focus:outline-none w-full text-Text" /* Added bg-Button, w-full, text-Text for consistency */
              />
              <span className="text-[24px] pr-[15px] absolute right-0 cursor-pointer"> {/* Added absolute right-0 */}
                <VscSend />
              </span>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="w-full">
            <div className="footerTextSubHeading mb-[24px]">Support</div>
            <div className="footerTextList mb-[16px]">
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </div>
            <div className="footerTextList mb-[16px]">exclusive@gmail.com</div>
            <div className="footerTextList">+88015-88888-9999</div>
          </div>

          {/* Column 3: Account */}
          <div className="w-full">
            <div className="footerTextSubHeading mb-[24px]">Account</div>
            <div className="footerTextList mb-[16px] cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>My Account</Link>
            </div>
            <div className="footerTextList mb-[16px] cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>Login / Register</Link>
            </div>
            <div className="footerTextList mb-[16px] cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>Cart</Link>
            </div>
            <div className="footerTextList mb-[16px] cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>Wishlist</Link>
            </div>
            <div className="footerTextList cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>Shop</Link>
            </div>
          </div>

          {/* Column 4: Quick Link */}
          <div className="w-full">
            <div className="footerTextSubHeading mb-[24px]">Quick Link</div>
            <div className="footerTextList mb-[16px] cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>Privacy Policy</Link>
            </div>
            <div className="footerTextList mb-[16px] cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>Terms Of Use</Link>
            </div>
            <div className="footerTextList mb-[16px] cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>FAQ</Link>
            </div>
            <div className="footerTextList cursor-pointer hover:text-Button2 duration-300">
              <Link to={""}>Contact</Link>
            </div>
          </div>

          {/* Column 5: Download App */}
          <div className="w-full">
            <div className="footerTextSubHeading mb-[24px]">Download App</div>
            <div className="font-poppins font-medium text-[12px] text-[#d9d9d9] mb-[8px]">
              Save $3 with App New User Only
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[15px]"> {/* Changed to flex-col on mobile, flex-row on sm+ */}
              <div>
                <img className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" src={Qr_code} alt="QR_CODE" /> {/* Used w/h for responsiveness, adjusted sizes */}
              </div>
              <div className="flex flex-col gap-[10px] w-full max-w-[150px] sm:max-w-none"> {/* Added w-full and max-w for responsiveness */}
                <Link to={""} className="block"> {/* Added block */}
                  <img
                    className="w-full h-auto max-w-[120px] sm:max-w-[150px] mx-auto" /* Responsive width */
                    src={GooglePlayButton}
                    alt="Get it on Google Play" // Improved alt text
                  />
                </Link>
                <Link to={""} className="block"> {/* Added block */}
                  <img
                    className="w-full h-auto max-w-[120px] sm:max-w-[150px] mx-auto" /* Responsive width */
                    src={AppStoreButton}
                    alt="Download on the App Store" // Improved alt text
                  />
                </Link>
              </div>
            </div>
            <div className="text-[24px] mt-[24px] flex justify-center sm:justify-start items-center gap-[24px]"> {/* Centered on mobile */}
              <Link
                to={""}
                className="cursor-pointer hover:text-Button2 duration-300"
              >
                <RiFacebookLine />
              </Link>
              <Link
                to={""}
                className="cursor-pointer hover:text-Button2 duration-300"
              >
                <CiTwitter />
              </Link>
              <Link
                to={""}
                className="cursor-pointer hover:text-Button2 duration-300"
              >
                <IoLogoInstagram />
              </Link>
              <Link
                to={""}
                className="cursor-pointer hover:text-Button2 duration-300"
              >
                <RiLinkedinLine />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyRight flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-[7px] mt-[76px] mb-[24px] text-[#828282] text-sm text-center"> {/* Adjusted gap, added text-sm, text-center, flex-col for mobile */}
          <span>
            <TbCopyright />
          </span>
          Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;