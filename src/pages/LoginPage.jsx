import React from "react";
import InputField from "../components/ui/InputField";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import signUpBg from "../assets/bgAssets/signUpBg.png";

const LoginPage = () => {
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
            Log in to Exclusive
          </h1>
          <h5
            className="font-poppins font-normal text-[16px] leading-[24px]
       tracking-[0%] text-Text2 mb-[48px]"
          >
            Enter your details below
          </h5>
          <div className="flex flex-col gap-[40px]">
            <InputField placeholder={"Email or Phone Number"}></InputField>
            <InputField placeholder={"Password"}></InputField>
          </div>
          <div className="mb-[16px] mt-[40px] flex justify-between items-center">
            <span>
              <PrimaryBtn text={"Login"} px={48}></PrimaryBtn>
            </span>
            <span>
              <button
                className="text-Button2 font-poppins font-normal text-[16px]
                 leading-[24px] cursor-pointer hover:text-HoverButtonPink"
              >
                Forgot Password?
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
