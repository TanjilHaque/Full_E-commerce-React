import React from "react";
import BreadCrumb from "../components/commonComponents/BreadCrumb";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import PrimaryBtn from "../components/ui/PrimaryBtn";

const ContactPage = () => {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
      <div className="flex justify-between items-center container mx-auto pb-[140px]">
        <div
          className="contactInfo px-[35px] py-[45px]
         shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]"
        >
          <div className="callUs flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-[16px]">
              <span
                className="w-[40px] h-[40px] text-[20px] flex justify-center items-center
               rounded-full bg-Button2 text-white"
              >
                <IoCallOutline />
              </span>
              <span
                className="font-poppins font-medium text-[16px]
                leading-[24px] tracking-[0%]
              "
              >
                Call To Us
              </span>
            </div>
            <div
              className="font-poppins text-[14px] font-normal leading-[21px] tracking-[0%]
             mb-[16px] mt-[24px]"
            >
              We are available 24/7, 7 days a week.
            </div>
            <div className="font-poppins text-[14px] font-normal leading-[21px] tracking-[0%] mb-[32px]">
              Phone: +8801611112222
            </div>
          </div>
          <hr className="w-[270px]" />
          <div className="writeUs flex flex-col justify-start items-start mt-[32px]">
            <div className="flex justify-center items-center gap-[16px]">
              <span
                className="w-[40px] h-[40px] text-[20px] flex justify-center items-center
               rounded-full bg-Button2 text-white"
              >
                <SlEnvolope />
              </span>
              <span
                className="font-poppins font-medium text-[16px]
                leading-[24px] tracking-[0%]
              "
              >
                Write To Us
              </span>
            </div>
            <div className="font-poppins text-[14px] font-normal leading-[21px] tracking-[0%] mt-[24px] mb-[16px]">
              Fill out our form and we will contact <br /> you within 24 hours.
            </div>
            <div className="font-poppins text-[14px] font-normal leading-[21px] tracking-[0%] mb-[16px]">
              Emails: customer@exclusive.com
            </div>
            <div className="font-poppins text-[14px] font-normal leading-[21px] tracking-[0%]">
              Emails: support@exclusive.com
            </div>
          </div>
        </div>
        <div
          className="formBox py-[40px] px-[35px]
         shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]"
        >
          <div className="flex justify-center items-center gap-[16px]">
            <div className="relative">
              <input
                type="text"
                id="yourName"
                placeholder=" " // ← single space enables placeholder-shown detection
                className="
      peer
      w-[235px] h-[50px]
      rounded-[4px]
      pl-[13px]
      bg-Secondary
      text-gray-900
      placeholder-transparent
      focus:outline-none
    "
              />

              <label
                htmlFor="yourName"
                className="
      absolute left-[13px] top-1/2 -translate-y-1/2
      text-gray-400
      transition-opacity duration-150
      pointer-events-none
      peer-placeholder-shown:opacity-100
      peer-not-placeholder-shown:opacity-0
    "
              >
                <span>Your Name</span>
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="yourEmail"
                placeholder=" " // ← single space enables placeholder-shown detection
                className="
      peer
      w-[235px] h-[50px]
      rounded-[4px]
      pl-[13px]
      bg-Secondary
      text-gray-900
      placeholder-transparent
      focus:outline-none
    "
              />

              <label
                htmlFor="yourEmail"
                className="
      absolute left-[13px] top-1/2 -translate-y-1/2
      text-gray-400
      transition-opacity duration-150
      pointer-events-none
      peer-placeholder-shown:opacity-100
      peer-not-placeholder-shown:opacity-0
    "
              >
                <span>Your Email</span>
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="yourPhone"
                placeholder=" " // ← single space enables placeholder-shown detection
                className="
      peer
      w-[235px] h-[50px]
      rounded-[4px]
      pl-[13px]
      bg-Secondary
      text-gray-900
      placeholder-transparent
      focus:outline-none
    "
              />

              <label
                htmlFor="yourPhone"
                className="
      absolute left-[13px] top-1/2 -translate-y-1/2
      text-gray-400
      transition-opacity duration-150
      pointer-events-none
      peer-placeholder-shown:opacity-100
      peer-not-placeholder-shown:opacity-0
    "
              >
                <span>Your Phone</span>
                <span className="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div className="my-[32px]">
            <textarea
              name=""
              id=""
              className="w-[740px] h-[210px] rounded-[4px] bg-Secondary
               pt-[13px] pl-[16px] placeholder:text-gray-400 resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="w-full flex justify-end items-end">
            <PrimaryBtn text={"Send Message"}></PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
