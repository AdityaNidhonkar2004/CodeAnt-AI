import React, { useState } from "react";
import CodeAntLogo from "../../utils/CodeAntLogo.png";
import LoginOptionSAAS from "./LoginOptionSAAS";
import LoginOptionSelfHosted from "./LoginOptionSelfHosted";
const RightSection = () => {
  const [selectedOption, setSelectedOption] = useState("SAAS");

  const handleToggle = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex-1 bg-[#FAFAFA] flex flex-col items-center justify-center px-4 md:px-16 py-8">
      <div className="bg-white border-2 border-[#EAECEC] rounded-3xl w-full py-14 h-[582.34px]">
        <div className="flex justify-center">
          <img src={CodeAntLogo} className="w-[35.62px] h-[40px]"></img>
          <h1 className="text-[30px] text-[#181D27] mb-8 ml-4 tracking-wide font-normal">
            CodeAnt AI
          </h1>
        </div>
        <h2 className="text-[24px] md:text-[32px] font-semibold text-center mb-6">
          Welcome to CodeAnt AI
        </h2>

        <div className="flex mb-8 mx-3">
          <button
            onClick={() => handleToggle("SAAS")}
            className={`w-full px-3 py-0.5 font-normal text-[20px] border-y-2 border-l-2 border-[#EAECEC]  rounded-l-xl ${
              selectedOption === "SAAS"
                ? "bg-[#1571EE] border-2 border-[#1571EE] text-white  rounded-xl z-20 mr-[-5px]"
                : "bg-[#FAFBFB] text-black"
            } `}
          >
            SAAS
          </button>
          <button
            onClick={() => handleToggle("Self Hosted")}
            className={`w-full px-3 py-2  font-normal text-[20px] border-y-2 border-r-2 border-[#EAECEC]  rounded-r-xl ${
              selectedOption === "Self Hosted"
                ? "bg-[#1571EE] border-2 border-[#1571EE] text-white rounded-xl z-20 ml-[-5px]"
                : "bg-[#FAFBFB] text-black"
            }`}
          >
            Self Hosted
          </button>
        </div>

        <div className="border border-[#E7E9F0] "></div>

        {selectedOption === "SAAS" ? (
          <LoginOptionSAAS />
        ) : (
          <LoginOptionSelfHosted />
        )}
      </div>
      <p className="text-[16px] text-[#181D27] mt-6">
        By signing up you agree to the{" "}
        <span className="font-bold">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default RightSection;
