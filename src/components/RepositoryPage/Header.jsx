import Refresh from "../../utils/Refresh.png";
import Search from "../../utils/Search.png";
import CodeAntLogo from "../../utils/CodeAntLogo.png";
import Bars from "../../utils/Bars.png";
import { useState } from "react";
import NavBar from "./NavBar";
import Close from "../../utils/Close.png"

const Header = ({ showBlackDrop, setShowBlackDrop }) => {
  const [show,setShow] = useState(false)
  const handleToggle = ()=>{
      setShow(!show);
      setShowBlackDrop(!showBlackDrop);
  }
  return (
    <header className="md:px-6 md:py-4 border-b-2 border-[#EAECEC] font-lato">
      <div className="flex justify-between md:hidden border-b-2 border-[#EAECEC] mb-5 px-4 py-3">
        <div className="flex">
        <img src={CodeAntLogo} className="w-[28.5px] h-[32px]"></img>
        <h1 className="text-[24px] text-[#181D27] mb-4 ml-2 tracking-wide font-normal font-lato">
          CodeAnt AI
        </h1>
        </div>
        <img src={show === false ? Bars:Close} alt={Bars} className={` ${show === false ?`w-[21px] h-[17.25px]`:`w-[15px] h-[15.05px]` } cursor-pointer mt-2`} onClick={handleToggle}/>
      </div>
      {show === true && <NavBar/>}
      <div className="md:flex justify-between items-center px-4 md:px-0">
        <div className="mb-5 md:mb-0 ">
          <h2 className="text-xl font-semibold mb-1 tracking-wide">
            Repositories
          </h2>
          <p className="text-[14px] text-[#414651] ">33 total repositories</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex border-2 border-[#EAECEC] text-[#404751] rounded-md px-3 py-2 ">
            <img src={Refresh} className="mr-3 p-1" />
            Refresh All
          </button>
          <button className="bg-[#1570EF] border-2 border-[#2E71CF] text-white px-4 py-2 rounded-md">
            + Add Repository
          </button>
        </div>
      </div>
      <div className="relative w-full max-w-sm my-4 px-4 md:px-0">
        <img
          src={Search}
          alt="Search Icon"
          className="absolute inset-y-0 left-6 md:left-3 h-5 w-5 my-auto"
        />
        <input
          type="text"
          placeholder="Search Repositories"
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </header>
  );
};

export default Header;
