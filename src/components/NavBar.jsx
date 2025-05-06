import React from 'react';
import logo from "../../public/logo.png"
import { IoPersonOutline } from "react-icons/io5";
import  {Link, NavLink} from "react-router";
const NavBar = () => {
    return (
      <div className="max-w-[1280px] mx-24 my-3.5 fixed">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div>
            <label className="input flex items-center justify-center rounded-3xl border border-[#EF3C8B]">
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
          <div>
            <Link to={"/account"}>Account</Link>
          </div>
        </div>
      </div>
    );
};

export default NavBar;