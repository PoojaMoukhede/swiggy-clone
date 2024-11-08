import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { VscSettings } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function OnlineDelivery() {
  const [categories, setCategories] = useState([]);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch("/restaurantChains.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-2" ref={componentRef}>
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurant with online food delivery in Betul{" "}
        </div>
      </div>
      <div className={isAtTop ? "fixed top-0 z-[9999] bg-white" : ""}>
  <div className="max-w-[1200px] mx-auto flex my-4 gap-3">
    <div className="p-3 pt-2 pb-2 rounded-full border border-gray-300 text-[14px] flex">
      <p>Filter</p> <VscSettings className="mt-1 ms-2" />
    </div>
    <div className="p-3 pt-2 pb-2 rounded-full border border-gray-300 text-[14px] flex">
      <p>Sort By</p> <MdKeyboardArrowDown className="mt-1 ms-2" />
    </div>
    <div className="p-3 pt-2 pb-2 rounded-full border border-gray-300 text-[14px]">
      Rating 4.0+
    </div>
    <div className="p-3 pt-2 pb-2 rounded-full border border-gray-300 text-[14px]">
      Pure Veg
    </div>
    <div className="p-3 pt-2 pb-2 rounded-full border border-gray-300 text-[14px]">
      Offers
    </div>
    <div className="p-3 pt-2 pb-2 rounded-full border border-gray-300 text-[14px]">
      Rs. 300-Rs. 400
    </div>
    <div className="p-3 pt-2 pb-2 rounded-full border border-gray-300 text-[14px]">
      Less than Rs.300
    </div>

    {/* Input field aligned to the end */}
    <div className="flex items-center  p-2">
      <input
        placeholder="Search for restaurant"
        className="outline-none px-2"
        readOnly
      />
      <CiSearch className="text-gray-500" />
    </div>
  </div>
</div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {categories.map((cat) => {
          return <Card key={cat.id} {...cat} />;
        })}
      </div>
    </div>
  );
}
