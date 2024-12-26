import CodeAntLogo from "../../utils/CodeAntLogo.png";
import Home from "../../utils/Home.png";
import Code from "../../utils/code.png";
import Cloud from "../../utils/Cloud.png";
import Book from "../../utils/Book.png";
import Gear from "../../utils/Gear.png";
import Phone from "../../utils/Phone.png";
import Signout from "../../utils/Signout.png";

export const SideBarOptions = [
  {
    name: "Repositories",
    logo: Home,
  },
  {
    name: "AI Code Review",
    logo: Code,
  },
  {
    name: "Cloud Security",
    logo: Cloud,
  },
  {
    name: "How to Use",
    logo: Book,
  },
  {
    name: "Settings",
    logo: Gear,
  },
];

const Sidebar = () => {
 

  return (
    <div className="w-[242px] bg-white flex flex-col items-center py-4">
      <div className="hidden md:flex justify-center">
        <img src={CodeAntLogo} className="w-[28.5px] h-[32px]"></img>
        <h1 className="text-[24px] text-[#181D27] mb-4 ml-2 tracking-wide font-normal font-lato">
          CodeAnt AI
        </h1>
      </div>
      <select
        name="Contributers"
        className="border border-[#DADCDE] rounded-lg px-3 py-2  mb-5"
      >
        <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
      </select>
      <nav className="space-y-2 mx-1">
        {SideBarOptions.map((option) => (
          <button
          key={option.name}
            className={`flex item-center justify-start w-full font-lato ${
              option.name === "Repositories"
                ? `bg-[#1571EE] text-white`
                : `bg-white text-[#414651]`
            } px-7 py-2  rounded-xl text-md font-semibold`}
          >
            <span>
              <img src={option.logo} className="mr-3 p-1"></img>
            </span>
            {option.name}
          </button>
        ))}
      </nav>
      <div className="mt-auto mr-14">
        <button className="flex item-center justify-start w-full rounded-xl text-md font-semibold  mb-4 text-[#414651] font-lato">
            <img src={Phone} className="mr-3 p-1"></img>
          <span>Support</span>
        </button>
        <button className="flex item-center justify-start w-full text-md font-semibold mb-4 text-[#414651] font-lato">
            <img src={Signout} className="mr-3 p-1"></img>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
