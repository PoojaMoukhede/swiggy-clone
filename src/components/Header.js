import React, { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io"; // Close icon
import { useNavigate } from "react-router-dom";
import { MdGpsFixed } from "react-icons/md"; // GPS icon

export default function Header() {
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const navigate = useNavigate();

  const showLocationMenu = () => {
    setLocationOpen(true);
  };

  const hideLocationMenu = () => {
    setLocationOpen(false);
  };

  const showSignInMenu = () => {
    setSignInOpen(true);
  };

  const hideSignInMenu = () => {
    setSignInOpen(false);
  };

  const links = [
    {
      icon: <IoIosSearch className="text-[20px]" />,
      text: "Search",
      link: "/search",
    },
    {
      icon: <CiDiscount1 className="text-[20px]" />,
      text: "Offers",
      sup: "new",
    },
    {
      icon: <IoHelpBuoyOutline className="text-[20px]" />,
      text: "Help",
      link: "/help",
    },
    { icon: <CiUser className="text-[20px]" />, text: "Sign In" },
    {
      icon: <RiShoppingCartLine className="text-[20px]" />,
      text: "Cart",
      link: "/cart",
    },
  ];

  return (
    <>
      {/* Black overlay for Location/Search Menu */}
      <div
        className="black-overlay w-full h-full fixed duration-500 z-[1000]"
        onClick={hideLocationMenu}
        style={{
          opacity: isLocationOpen ? 1 : 0,
          visibility: isLocationOpen ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[500px] bg-white h-full absolute duration-[600ms]"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            left: isLocationOpen ? "0%" : "-100%",
          }}
        >
          {/* Close Icon */}
          <div className="flex justify-start p-5 ms-10">
            <IoMdClose
              size={24}
              className="cursor-pointer"
              onClick={hideLocationMenu}
            />
          </div>

          {/* Search and Location Section */}
          <div className="flex flex-col gap-4 p-6 ms-10">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for area, street name..."
              className="border border-gray-300 p-5 rounded-md w-full text-gray-700 focus:outline-none"
            />

            {/* Get Current Location */}
            <div className="flex items-center gap-4 p-5 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
              <MdGpsFixed size={24} className="text-gray-500" />
              <div>
                <p className="text-black font-bold">Get current location</p>
                <p className="text-gray-700 text-sm">Using GPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black overlay for Sign-In Menu */}
      <div
        className={`black-overlay w-full h-full fixed duration-500 z-[1000] bg-black bg-opacity-50 ${
          isSignInOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSignInMenu}
      >
        {/* Sign-in modal sliding from right */}
        <div
          className={`w-[400px] bg-white h-full absolute duration-[600ms] right-0 ${
            isSignInOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Close Icon */}
          <div className="flex justify-start p-5 ms-10">
            <IoMdClose
              size={24}
              className="cursor-pointer"
              onClick={hideSignInMenu}
            />
          </div>

          {/* Sign-in Section */}
          <div className="flex flex-col gap-4 p-6 ms-10">
            <div className="flex justify-between align-middle">
              <div className="flex flex-col justify-center align-middle ">
                <h2 className="text-xl font-semibold">Login</h2>
                <span className="flex gap-1">
                  {" "}
                  <p className="text-gray-500 ">or </p>
                  <p className="text-red-600">create an account</p>
                </span>
              </div>
              <img alt="" src="images/login.avif" className="w-32" />
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="border border-gray-300 p-5 rounded-md w-full text-gray-700 focus:outline-none"
            />

            <button className="bg-orange-500 text-white p-3 rounded-md w-full mt-4">
              LOGIN
            </button>

            <p className="text-gray-500 text-sm mt-2">
              By clicking on Login, I accept the{" "}
              <span className="text-blue-500">Terms & Conditions</span> &{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-[999] bg-white p-[15px]  text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]" onClick={() => navigate("/")}>
            <img src="images/swiggy-1.svg" alt="logo" />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[black] mx-1">
              Sadar
            </span>
            Betul, Madhya Pradesh, India{" "}
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc8019]"
              onClick={showLocationMenu}
            />
          </div>
          <nav className="flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              if (link.text === "Sign In") {
                return (
                  <li
                    key={index}
                    className="flex cursor-pointer gap-2 hover:text-[#fc8019] items-center text-[15px]"
                    onClick={showSignInMenu}
                  >
                    {link.icon}
                    {link.text}
                    <sup className="text-[#fc8019]">{link.sup}</sup>
                  </li>
                );
              }
              return (
                <li
                  key={index}
                  className="flex cursor-pointer gap-2 hover:text-[#fc8019] items-center text-[15px]"
                  onClick={() => navigate(link.link)}
                >
                  {link.icon}
                  {link.text}
                  <sup className="text-[#fc8019]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
