import React from "react";
import { GoPlus } from "react-icons/go";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { TbCurrencyTaka } from "react-icons/tb";

const CategoriesNav = () => {
  const [value, setValue] = React.useState([0, 20]);
  const getCategory = (e) => {
    const form = e.target;
    const checkedValue = form.value;
    console.log(checkedValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };
  return (
    <div className="space-y-5">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-xl font-bold">Category</h1>
          <GoPlus className="text-xl font-bold"></GoPlus>
        </div>
        <div className="text-[#F40F6F] mt-2">
          <hr />
        </div>
        <div className="mt-3">
          <form onChange={getCategory}>
            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F]"
                  name="category-radio"
                  value="sun care"
                  defaultChecked
                />
                <span className="">Sun Care</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="night care"
                />
                <span className="">Night Care</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="moisturizers"
                />
                <span className="">Moisturizers</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="eye care"
                />
                <span className="">Eye Care</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="masks"
                />
                <span className="">Masks</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="personal care"
                />
                <span className="">Personal Care</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="hair care"
                />
                <span className="">Hair Care</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="on sale"
                />
                <span className="">On Sale</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="category-radio"
                  value="seller picks"
                />
                <span className="">Seller Picks</span>
              </label>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-xl font-bold">Brand</h1>
          <GoPlus className="text-xl font-bold"></GoPlus>
        </div>
        <div className="text-[#F40F6F] mt-2">
          <hr />
        </div>
        <div className="mt-3">
          <form onChange={getCategory}>
            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F]"
                  name="brand-radio"
                  value="The Body Shop"
                  defaultChecked
                />
                <span className="">The Body Shop</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Nivea"
                />
                <span className="">Nivea</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Skinfood"
                />
                <span className="">Skinfood</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Neutrogena"
                />
                <span className="">Neutrogena</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Cerave"
                />
                <span className="">Cerave</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Olay"
                />
                <span className="">Olay</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Dove"
                />
                <span className="">Dove</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Neogen"
                />
                <span className="">Neogen</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="brand-radio"
                  value="Loreal"
                />
                <span className="">Loreal</span>
              </label>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-xl font-bold">Colors</h1>
          <GoPlus className="text-xl font-bold"></GoPlus>
        </div>
        <div className="text-[#F40F6F] mt-2">
          <hr />
        </div>
        <div className="mt-3">
          <form onChange={getCategory}>
            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F]"
                  name="color-radio"
                  value="Red"
                  defaultChecked
                />
                <span className="">Red</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="Pink"
                />
                <span className="">Pink</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="White"
                />
                <span className="">White</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="Black "
                />
                <span className="">Black </span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="Aqua"
                />
                <span className="">Aqua</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="Green"
                />
                <span className="">Green</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="Blue"
                />
                <span className="">Blue</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="Neogen"
                />
                <span className="">Neogen</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  className="w-4 h-4 radio text-[#F40F6F] font-bold"
                  name="color-radio"
                  value="Loreal"
                />
                <span className="">Loreal</span>
              </label>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-xl font-bold">Size</h1>
          <GoPlus className="text-xl font-bold"></GoPlus>
        </div>
        <div className="text-[#F40F6F] mt-2">
          <hr />
        </div>
        <div className="mt-3">
          <form className="">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              <input
                name="size-btn"
                type="button"
                value="150ml"
                className="cursor-pointer border-1 px-1 py-1 rounded-sm border-[#F40F6F]"
                defaultChecked
              />
              <input
                name="size-btn"
                type="button"
                value="200ml"
                className="btn cursor-pointer border-1 px-1 py-1"
              />

              <input
                name="size-btn"
                type="button"
                value="200ml"
                className="btn cursor-pointer border-1 px-1 py-1"
              />
              <input
                name="size-btn"
                type="button"
                value="300ml"
                className="btn cursor-pointer border-1 px-1 py-1"
              />
              <input
                name="size-btn"
                type="button"
                value="500ml"
                className="btn cursor-pointer border-1 px-1 py-1"
              />
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-xl font-bold">Price</h1>
          <GoPlus className="text-xl font-bold"></GoPlus>
        </div>
        <div className="text-[#F40F6F] mt-2">
          <hr />
        </div>
        <div className="mt-3">
          <Box sx={{ width: "100%" }} className="text-[#F40F6F]">
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              color="#F40F6F"
              //   getAriaValueText={valuetext}
            />
          </Box>
          <div className="flex justify-between w-full">
            <p className="flex items-center">
              Price:{" "}
              <span className="text-bold">
                <TbCurrencyTaka></TbCurrencyTaka>
              </span>
              <span className="font-bold">0</span>
            </p>

            <p className="flex items-center font-bold">
              <TbCurrencyTaka className="font-bold"></TbCurrencyTaka> {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesNav;
