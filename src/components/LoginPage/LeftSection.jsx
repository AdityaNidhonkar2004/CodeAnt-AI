import React from 'react'
import BgCodeAntImage from "../../utils/Subtract.png";
import CodeAntLogo from "../../utils/CodeAntLogo.png";
import Vector from "../../utils/Vector.png";

const LeftSection = () => {
  return (
    <div className="flex-1 bg-gray-100 hidden lg:flex flex-col items-center justify-center px-4 md:px-16 py-6">
        <div className="bg-white shadow-2xl rounded-3xl relative z-0">
          <div className="flex justify-start items-center p-3 my-2 mr-36">
           <img src={CodeAntLogo}></img>
            <h2 className="ml-2 text-[18px] text-balance  font-bold text-[#081735]">
              AI to Detect & Autofix Bad Code
            </h2>
          </div>

          <div className="border border-[#E7E9F0]"></div>

          {/* Statistics Row */}
          <div className="flex justify-between text-center px-16 my-6">
            <div>
              <p className="text-[18px] text-[#081735] font-bold">30+</p>
              <p>Language Support</p>
            </div>
            <div>
              <p className="text-[18px] text-[#081735] font-bold">10K+</p>
              <p>Developers</p>
            </div>
            <div>
              <p className="text-[18px] text-[#081735] font-bold">100K+</p>
              <p>Hours Saved</p>
            </div>
          </div>

          {/* Issues Fixed Section */}
          <div className="z-100 absolute right-3 translate-x-6 -translate-y-2 bg-white rounded-3xl p-4 shadow-[5px_10px_30px_5px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between">
              {/* Put image here */}
              <div className="w-[56px] h-[56px] bg-purple-100 rounded-full mr-10 flex items-center justify-center">
                <img src={Vector}/>
              </div>
              <div className="ml-20 p-2">
                <div className="flex justify-evenly">
                  <svg
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.83325 5.65698L5.83325 1.65698L9.83325 5.65698"
                      stroke="#0049C6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83325 1.65698L5.83325 11.9861"
                      stroke="#0049C6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-sm text-[#0149C7] font-extrabold ml-1 mt-[-4px]">
                    14%{" "}
                  </p>
                </div>
                <p className="text-sm text-[#081735] font-semi-bold">
                  This week
                </p>
              </div>
            </div>
            <p className="text-[14px] text-[#171717] mt-2 font-semibold">
              Issues Fixed
            </p>
            <p className="text-[32px] font-bold ">500K+</p>
          </div>
        </div>
        <div className="mt-80 xl:mt-48">
          <img src={BgCodeAntImage} className="absolute bottom-0 left-0"></img>
        </div>
      </div>
  )
}

export default LeftSection