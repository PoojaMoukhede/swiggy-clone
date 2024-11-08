import React from "react";
import Header from "./Header";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto px-2">
        <div className="flex my-3 mt-7 items-center justify-center">
          <div className="w-[800px] relative">
            <input
              placeholder="Search for restaurants and food"
              className="border w-full border-gray-400 p-3 pr-10" // Extra padding on the right for the icon
            />
            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-[22px]" /> {/* Icon position */}
          </div>
        </div>
      </div>
    </>
  );
}
