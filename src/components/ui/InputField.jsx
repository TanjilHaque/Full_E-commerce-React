import React from "react";

const InputField = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className=" w-[370px]
          border-b border-b-gray-400
          placeholder:font-poppins
          placeholder:leading-[24px]
          focus:outline-none
          focus:border-b-blue-500
          focus:border-b-2
          transition-all duration-200"
      />
    </div>
  );
};

export default InputField;
