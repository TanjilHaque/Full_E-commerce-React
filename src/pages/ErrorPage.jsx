import React from "react";
import BreadCrumb from "../components/commonComponents/BreadCrumb";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
      <div className="flex flex-col justify-center items-center pt-[80px] pb-[140px]">
        <h1
          className="font-inter font-medium text-[110px]
         leading-[115px] tracking-[3%] mb-[40px]"
        >
          404 Not Found
        </h1>
        <p
          className="font-poppins text-[16px] leading-[24px]
         tracking-[0%] mb-[80px]"
        >
          Your visited page not found. You may go home page.
        </p>
        <Link to={"/"}>
          <PrimaryBtn text={"Back to home page"}></PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
