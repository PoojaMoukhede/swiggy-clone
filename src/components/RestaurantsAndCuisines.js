import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function RestaurantsAndCuisines() {
  return (
    <div className="max-w-[1200px] mx-auto px-3 p-6">
      {/* Best Places to Eat Across Cities */}
      <div className="mb-[80px]">
        <h2 className="text-2xl font-bold mb-4">Best Places to Eat Across Cities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Best Restaurants in Bangalore",
            "Best Restaurants in Pune",
            "Best Restaurants in Mumbai",
            "Best Restaurants in Delhi",
            "Best Restaurants in Hyderabad",
            "Best Restaurants in Kolkata",
            "Best Restaurants in Chennai",
            "Best Restaurants in Chandigarh",
            "Best Restaurants in Ahmedabad",
            "Best Restaurants in Jaipur",
            "Best Restaurants in Nagpur",
          ].map((city, index) => (
            <button
              key={index}
              className="sm-card px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              {city}
            </button>
          ))}
           <button className="sm-card px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none flex justify-center">
           <p className="font-bold text-gray-500"> Show More</p> <RiArrowDownSLine className="mt-1 ms-2"/>
          </button>
        </div>
      </div>

      {/* Best Cuisines Near Me */}
      <div className="mb-[80px]">
        <h2 className="text-2xl font-bold mb-4">Best Cuisines Near Me</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Chinese Restaurant Near Me",
            "South Indian Restaurant Near Me",
            "Indian Restaurant Near Me",
            "Kerala Restaurant Near Me",
            "Korean Restaurant Near Me",
            "North Indian Restaurant Near Me",
            "Seafood Restaurant Near Me",
            "Bengali Restaurant Near Me",
            "Punjabi Restaurant Near Me",
            "Italian Restaurant Near Me",
            "Andhra Restaurant Near Me",
          ].map((cuisine, index) => (
            <button
              key={index}
              className="sm-card px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              {cuisine}
            </button>
          ))}
          <button className="sm-card px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none flex justify-center">
           <p className="font-bold text-gray-500"> Show More</p> <RiArrowDownSLine className="mt-1 ms-2"/>
          </button>
        </div>
      </div>

      <div className="mb-[80px]">
        <h2 className="text-2xl font-bold mb-4">Best Cuisines Near Me</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Explore Restaurant Near Me",
            "Expolre Top Rated Restaurant Near Me",
       
          ].map((cuisine, index) => (
            <button
              key={index}
              className="sm-card px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              {cuisine}
            </button>
          ))}
          
        </div>
      </div>

      <hr className="my-6 border-[1px] border-black" />
    </div>
  );
}
