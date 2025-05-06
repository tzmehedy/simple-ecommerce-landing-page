import React from 'react';
import logo from "../../public/logo.png"
import { IoPersonOutline } from "react-icons/io5";
import  { NavLink} from "react-router";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const NavBar = () => {
    return (
      <div>
        {/* Main navbar */}
        <div className="mx-5 lg:mx-24 my-3.5 flex justify-between items-center">
          <div className="">
            <img className="" src={logo} alt="" />
          </div>
          <div className="hidden lg:inline-flex justify-between items-center">
            <div className="">
              <label className="input flex  items-center justify-center rounded-3xl border border-[#EF3C8B] w-96">
                <svg
                  className="h-[1em] text-[#EF3C8B]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>

                <input
                  type="search"
                  className="grow"
                  placeholder="search your products..."
                />
              </label>
            </div>
            <div className="flex items-center lg:space-x-3">
              <button className="border-r border-gray-500 px-2">
                <NavLink
                  to={"/account"}
                  className="flex items-center font-semibold"
                >
                  {" "}
                  <IoPersonOutline className="mr-2 "></IoPersonOutline>Account
                </NavLink>
              </button>

              <button className="bg-[#F40F6F] px-4 py-1 rounded-3xl">
                <NavLink
                  to={"/account"}
                  className="flex items-center font-semibold text-white "
                >
                  <MdOutlineShoppingBag className="mr-2"></MdOutlineShoppingBag>
                  Cart(0)
                </NavLink>
              </button>
            </div>
          </div>

          <div className="text-xl flex space-x-3 lg:hidden">
            <button>
              <MdOutlineShoppingBag></MdOutlineShoppingBag>
            </button>
            <button>
              <CiMenuBurger></CiMenuBurger>
            </button>
          </div>
        </div>

        {/* sub navbar */}
        <div className="mx-5 lg:mx-24 mt-5 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex justify-between items-center w-[242px] px-5 py-2 bg-[#F5CCDC]">
            <div className="flex justify-between items-center uppercase">
              <CiMenuBurger className="mr-2"></CiMenuBurger>
              Categories
            </div>
            <div>
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          </div>

          <div className="text-white font-semibold flex  items-center space-x-5 mt-3">
            <button className="bg-[#471D6B] px-3 py-1 rounded-3xl">
              Offers
            </button>
            <button className="bg-[#FF87A6] px-3 py-1 rounded-3xl">
              Seller Picks
            </button>
            <button className="bg-[#913BDB] px-3 py-1 rounded-3xl">
              Campaign
            </button>
          </div>
        </div>
      </div>
    );
};

export default NavBar;