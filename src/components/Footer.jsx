import React from 'react';
import logo from "../../public/logo.png"
import { CiMobile2 } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className=" bg-[#361354] p-20 mt-20 text-white">
        <div className="flex flex-col lg:flex-row justify-between">
          <aside className="space-y-3">
            <img src={logo} alt="" />
            <p className="flex items-center space-x-3 text-2xl font-bold">
              <CiMobile2 className=""></CiMobile2>{" "}
              <span className="text-lg">13234-774464</span>
            </p>
            <p className="flex items-center space-x-3 text-2xl font-bold">
              <MdOutlineMail></MdOutlineMail>{" "}
              <span className="text-lg">anghorag@support.gmail.com</span>
            </p>

            <p>Join Our Social Links</p>
            <div className="text-white mt-2">
              <hr />
            </div>

            <div className="flex space-x-4">
              <button className="btn px-3 py-3">
                <FaFacebook className="text-[#F40F6F] font-bold text-3xl"></FaFacebook>
              </button>
              <button className="btn px-3 py-3">
                <FaLinkedin className="text-[#F40F6F] font-bold text-3xl"></FaLinkedin>
              </button>
            </div>
          </aside>
          <nav className="flex flex-col">
            <h6 className="footer-title text-[#F40F6F] font-bold">
              Categories
            </h6>
            <div className="flex flex-col space-y-3">
              <a className="link link-hover">Makeup</a>
              <a className="link link-hover">Skin Care</a>
              <a className="link link-hover">Bath & Body</a>
              <a className="link link-hover">Hair Care</a>
              <a className="link link-hover">Personal Care</a>
              <a className="link link-hover">Sexual Wellness</a>
            </div>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title text-[#F40F6F] font-bold">
              Quick Links
            </h6>
            <div className="flex flex-col space-y-3">
              <a className="link link-hover">Offers</a>
              <a className="link link-hover">Seller Picks</a>
              <a className="link link-hover">Campaigns</a>
              <a className="link link-hover">Hair Care</a>
            </div>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title text-[#F40F6F] font-bold">Support</h6>
            <div className="flex flex-col space-y-3">
              <a className="link link-hover">Return Policy</a>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">FAQS</a>
              <a className="link link-hover">Shipping & Delivery</a>
              <a className="link link-hover">Contact Us</a>
            </div>
          </nav>
        </div>

        <div className="mt-20 text-gray-400">
          <hr />
        </div>

        <div className='text-center mt-2 text-gray-400'>
          <p>Copyright &copy; 2023 Anghorag. All Right Reserved</p>
        </div>
      </footer>
    );
};

export default Footer;