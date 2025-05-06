import React from 'react';
import titleBgImg from "../assets/images/Group 172.png"
import { IoIosArrowForward } from "react-icons/io";

const SkinCareTitle = () => {
    return (
      <div
        className="h-40 w-full bg-contain lg:bg-cover px-24 flex flex-col justify-center"
        style={{ backgroundImage: `url(${titleBgImg})` }}
      >
        <p className="w-full flex items-center">
          <span className='text-sm'>Healthcare & Beauty</span>{" "}
          <IoIosArrowForward></IoIosArrowForward> <small className='opacity-80'>Skin Care</small>
        </p>
        <h1 className='text-3xl font-bold'>Skin Care Products</h1>
      </div>
    );
};

export default SkinCareTitle;