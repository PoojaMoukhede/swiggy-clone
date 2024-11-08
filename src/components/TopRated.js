import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

export default function TopRated() {
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/restaurantChains.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const prevSlide = () => {
    if (count === 0) return false;
    setCount(count - 2);
  };
  const nextSlide = () => {
    if (categories.length - 4 === count) return false;
    setCount(count + 2);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">Top restaurant in Betul</div>
        <div className="flex">
          <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex justify-center items-center rounded-full mx-2 cursor-pointer">
            <FaArrowLeft onClick={prevSlide} />
          </div>
          <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex justify-center items-center rounded-full mx-2 cursor-pointer">
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {categories.map((cat, index) => {
          return <Card {...cat} key={index} width="w-full md:w-[273px]" />;
        })}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}
