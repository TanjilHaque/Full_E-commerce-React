import React from "react";
import signUpBg from "../assets/bgAssets/signUpBg.png";
import InputField from "../components/ui/InputField";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  return (
    <div className="flex justify-center gap-[350px] items-center">
      <div>
        <picture>
          <img src={signUpBg} alt="signUpBg" />
        </picture>
      </div>
      <div className="pr-[255px] py-[100px]">
        <div>
          <h1
            className="font-inter text-[36px] font-medium text-Text2
           leading-[30px] tracking-[4%] mb-[24px]"
          >
            Create an account
          </h1>
          <h5
            className="font-poppins font-normal text-[16px] leading-[24px]
           tracking-[0%] text-Text2 mb-[48px]"
          >
            Enter your details below
          </h5>
          <div className="flex flex-col gap-[40px]">
            <InputField placeholder={"Name"}></InputField>
            <InputField placeholder={"Email or Phone Number"}></InputField>
            <InputField placeholder={"Password"}></InputField>
          </div>
          <div className="mb-[16px] mt-[40px]">
            <PrimaryBtn text={"Create Account"} px={122}></PrimaryBtn>
          </div>
          <div>
            <button
              className="flex justify-center items-center gap-[16px] border rounded-[4px]
             px-[86px] py-[16px] cursor-pointer transition-all duration-300 hover:bg-Button2
              hover:text-white mb-[32px]"
            >
              <span className="text-[24px]">
                <FcGoogle />
              </span>
              <span
                className="font-poppins font-normal text-[16px]
               leading-[24px]"
              >
                Sign Up with Google
              </span>
            </button>
            <div className="flex justify-center items-center gap-4">
              <span className="font-poppins text-[16px] font-normal leading-[24px] tracking-[0%]">
                Already have an accout?
              </span>
              <button
                className="cursor-pointer font-poppins text-[16px] font-medium
               leading-[24px] tracking-[0%] border-b transition duration-300
                hover:border-b-Button2 hover:text-Button2"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
