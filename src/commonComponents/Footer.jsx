import React from "react";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { TbCopyright } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-Button text-Text font-poppins pt-[80px]">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between items-start gap-[87px]">
          <div>
            <div className="font-inter font-bold text-[24px] mb-[24px]">Exclusive</div>
            <div className="footerTextSubHeading mb-[24px]">Subscribe</div>
            <div className="footerTextList mb-[16px]">Get 10% off your first order</div>
            <div className="relative flex justify-center items-center border-[1.5px] border-Text">
              <input type="text" placeholder="Enter your email"
               className="py-[12px] pl-[16px] pr-[32px] border-none" />
               <span className="text-[24px] pr-[15px]"><VscSend /></span>
            </div>
          </div>
          <div>
            <div className="footerTextSubHeading mb-[24px]">Support</div>
            <div className="footerTextList mb-[16px]">111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</div>
            <div className="footerTextList mb-[16px]">exclusive@gmail.com</div>
            <div className="footerTextList">+88015-88888-9999</div>
          </div>
          <div>
            <div className="footerTextSubHeading mb-[24px]">Account</div>
            <div className="footerTextList mb-[16px]">My Account</div>
            <div className="footerTextList mb-[16px]">Login / Register</div>
            <div className="footerTextList mb-[16px]">Cart</div>
            <div className="footerTextList mb-[16px]">Wishlist</div>
            <div className="footerTextList">Shop</div>
          </div>
          <div>
            <div className="footerTextSubHeading mb-[24px]">Quick Link</div>
            <div className="footerTextList mb-[16px]">Privacy Policy</div>
            <div className="footerTextList mb-[16px]">Terms Of Use</div>
            <div className="footerTextList mb-[16px]">FAQ</div>
            <div className="footerTextList">Contact</div>
          </div>
          <div>
            <div className="footerTextSubHeading mb-[24px]">Download App</div>
            <div className="font-poppins font-medium text-[12px] text-[#d9d9d9] mb-[8px]">Save $3 with App New User Only</div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <span>
                <RiFacebookLine />
              </span>
              <span>
                <CiTwitter />
              </span>
              <span>
                <IoLogoInstagram />
              </span>
              <span>
                <RiLinkedinLine />
              </span>
            </div>
          </div>
        </div>
        <div className="copyRight">
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
