import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Catagory() {
  const [categories, setCategories] = useState([]);
  const [count,setCount] = useState(0)

  useEffect(() => {
    fetch("/category.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const prevSlide = ()=>{
    if (count === 0) return false
setCount(count-3)
  }
  const nextSlide = ()=>{
    if (categories.length-8 === count) return false
    setCount(count+3)
    }

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex justify-center items-center rounded-full mx-2 cursor-pointer">
            <FaArrowLeft onClick={prevSlide}/>
          </div>
          <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex justify-center items-center rounded-full mx-2 cursor-pointer">
            <FaArrowRight  onClick={nextSlide}/>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((category, index) => (
          <div style={{
            transform:`translateX(-${count *100}%)`
          }} key={index} className="w-[150px] shrink-0 duration-500">
            <img src={category.image} alt={category.name} className="w-full h-[150px] object-cover rounded-lg" />
            <div className="text-center mt-2 font-medium">{category.name}</div>
          </div>
        ))}
      </div>
      <hr className="my-6 border-[1px]"/>
    </div>
  );
}
