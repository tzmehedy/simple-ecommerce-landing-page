import { Rating } from "@mui/material";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
const ProductCard = ({ product }) => {
  return (
    <div className="border border-[#FF87A6] p-5 rounded-lg relative">
      <div className="space-y-2">
        <div>
          <img className="w-full" src={product?.image} alt="" />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-xsm">{product?.title}</h1>
          <p className="flex items-center space-x-3">
            <Rating
              name="size-small"
              readOnly
              defaultValue={product?.ratings}
              size="small"
            />

            {`(${product?.rating_count})`}
          </p>

          <div className="flex space-x-3">
            <p className="flex items-center">
              <TbCurrencyTaka></TbCurrencyTaka>
              {product?.price}
            </p>
            <del className="text-gray-400">{product?.offer_price}</del>
            <p>{`(-${product?.discount_percent})`}</p>
          </div>

          <div className="flex justify-between w-full">
            <button className="border border-[#F40F6F] px-3 py-2 text-[#F40F6F] flex justify-between items-center space-x-3">
              <LuMinus className="cursor-pointer border-r-1 border-[#F40F6F]"></LuMinus>
              <span className="text-black">0</span>
              <GoPlus className="cursor-pointer border-l-1 border-[#F40F6F]"></GoPlus>
            </button>

            <button className="bg-[#FFBFCD] px-3 py-2 rounded-sm flex items-center font-semibold text-[#F40F6F] ">
              <MdOutlineShoppingBag className="mr-2"></MdOutlineShoppingBag>
              Add
            </button>
          </div>
        </div>
      </div>

      {product?.status === "sale" && (
        <div
          
          className="absolute w-32 top-0 -left-3 mt-10  flex justify-center -rotate-45  bg-[#F40F6F] text-white font-bold"
        >
          <p>sale</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
