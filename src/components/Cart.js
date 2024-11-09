import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";



const Cart = () => {
  const navigate = useNavigate();

  const links = [
    { icon: <CiUser className="text-[20px]" />, text: "Sign In" },
    {
      icon: <RiShoppingCartLine className="text-[20px]" />,
      text: "Cart",
      link: "/cart",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-[999] bg-white p-[15px]  text-gray-700 font-extrabold">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]" onClick={() => navigate("/")}>
            <img src="images/swiggy-1.svg" alt="logo" />
          </div>
          <div>SECURE CHECKOUT</div>
          <nav className="flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
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
      <div className="flex flex-col items-center my-10 min-h-[80vh] bg-gray-50">
        {/* Image */}
        <div className="my-10">
          <img
            src="images/cart.avif" // replace with actual image URL
            alt="Empty Cart"
            className="w-80 h-64"
          />
        </div>

        {/* Cart Message */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600">
            Your cart is empty
          </h2>
          <p className="text-gray-400 text-[14px]">
            You can go to the home page to view more restaurants
          </p>
        </div>

        {/* Button */}
        <button className="mt-5 px-6 py-2 bg-orange-600 text-white  hover:bg-orange-500">
          SEE RESTAURANTS NEAR YOU
        </button>
      </div>
      <div className="bg-[#e9ecee]">
        <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 px-5">
          {/* Left Section */}
          <div className="w-full md:w-2/3 space-y-5 mt-5">
            {/* Error Message */}
            <div className="bg-white p-6 flex items-center space-x-4 pb-10">
              {/* Icon */}
              <div
                className="w-10 h-10 bg-gray-800 shadow-xl flex items-center justify-center"
                style={{ marginLeft: "-50px" }}
              >
                <img
                  src="images/Restuarant_closed_ilvdr7.png"
                  alt="Cart icon"
                  className="w-[25px] h-[25px]"
                />
              </div>
              {/* Message */}
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Oops, something went wrong. Please clear your cart and try
                  again.
                </p>
                <button className="px-5 py-2 bg-orange-600 text-white hover:bg-orange-500">
                  RETRY
                </button>
              </div>
            </div>

            {/* Account Section */}
            <div className="bg-white p-6 space-y-3 flex">
              <div
                className="w-10 h-10 bg-gray-800 shadow-xl flex items-center justify-center"
                style={{ marginLeft: "-50px" }}
              >
                <FaRegUser className="text-white text-[18px]"/>
              </div>

              <div className="flex justify-between  items-center  align-middle">
                <div className="ms-4">
                  {/* <CiUser className="text-2xl text-gray-500" /> */}
                  <h2 className="text-lg font-semibold text-gray-800">
                    Account
                  </h2>

                  <p className="text-gray-400 mb-3">
                    To place your order now, log in to your existing account or
                    sign up.
                  </p>
                  <div className="flex space-x-5">
                    <button className="flex-1 px-4 py-2 border border-[#60b246] text-[#60b246] font-bold ">
                      <p className="text-[12px] font-light">Have an account?</p>
                      LOG IN
                    </button>
                    <button className="flex-1 px-4 py-2 bg-[#60b246] text-white border-[#60b246]">
                      <p className="text-[12px] font-light">New to swiggy?</p>
                      SIGN UP
                    </button>
                  </div>
                </div>
                <img alt="" src="images/login.avif" className="w-32 h-32" />
              </div>
            </div>
            <div className="bg-white p-6 flex items-center space-x-4 pb-10">
              {/* Icon */}
              <div
                className="w-10 h-10 bg-white border border-gray-300 shadow-xl flex items-center justify-center"
                style={{ marginLeft: "-50px" }}
              >
                <GoLocation className=" text-[20px]"/>
              </div>
              {/* Message */}
              <h2 className="text-gray-400 font-bold text-lg">
              Delivery address
              </h2>
            </div>
        
            <div className="bg-white p-6 flex items-center space-x-4 pb-10">
              {/* Icon */}
              <div
                className="w-10 h-10 bg-white border border-gray-300 shadow-xl flex items-center justify-center"
                style={{ marginLeft: "-50px" }}
              >
               <IoWalletOutline className=" text-[22px]"/>
              </div>
              {/* Message */}
              <h2 className="text-lg font-semibold text-gray-400">Payment</h2>

            </div>
          
          </div>

          {/* Right Section */}

          {/* Right Section */}
          <div className="w-full md:w-1/3 p-6 ">
            {/* Cart Empty Title */}
            <h1 className="text-2xl font-semibold text-gray-500 mb-10 text-left">
              Cart Empty
            </h1>

            {/* Empty Cart Content */}
            <div className="flex flex-col items-center text-center">
              {/* Empty Cart Image */}
              <img
                src="images/Cart_empty_-_menu_2x_ejjkf2.avif" // Replace with your empty cart image URL
                alt="Empty Cart"
                className="w-64 h-64 mb-5"
              />

              {/* Empty Cart Message */}
              <p className="text-gray-400  text-left">
                Good food is always cooking! Go ahead, order some yummy items
                from the menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
