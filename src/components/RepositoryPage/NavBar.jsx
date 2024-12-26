import React from 'react'
import { SideBarOptions } from './Sidebar'
import Phone from "../../utils/Phone.png";
import Signout from "../../utils/Signout.png";

const NavBar = () => {
  return (
    <div className='absolute z-10 bg-white w-screen'>
       <div className='px-3'>
       <select
        name="Contributers"
        className="border border-[#DADCDE] rounded-lg px-3 py-2 mb-5 w-full"
      >
        <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
      </select>
       </div>
      <nav className="space-y-2 mx-1">
        {SideBarOptions.map((option) => (
          <button
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
      <div className="space-y-2 mx-1 mb-5">
        <button className="px-7 py-2  flex item-center justify-start w-full rounded-xl text-md font-semibold text-[#414651] font-lato">
            <img src={Phone} className="mr-3 p-1"></img>
          <span>Support</span>
        </button>
        <button className="px-7  flex item-center justify-start w-full text-md font-semibold text-[#414651] font-lato">
            <img src={Signout} className="mr-3 p-1"></img>
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default NavBar