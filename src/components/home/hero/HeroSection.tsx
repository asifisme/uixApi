import React from "react";
import { Menu, ChevronRight } from "lucide-react";

const categories = [
  "Value of the Day",
  "Top 100 Offers",
  "New Arrivals",
  "Laptops & Computers",
  "Cameras & Photography",
  "Smart Phones & Tablets",
  "Video Games & Consoles",
  "TV & Audio",
  "Gadgets",
  "Car Electronic & GPS",
  "Accessories",
];

const HeroSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-6">
      {/* Container for responsive layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Menu */}
        <div className="w-full lg:w-1/4 border border-gray-200 rounded-md">
          <div className="bg-yellow-400 text-black px-4 py-3 font-semibold flex items-center gap-2">
            <Menu className="w-5 h-5" /> All Departments
          </div>
          <ul className="divide-y divide-gray-200 text-sm">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                {cat} <ChevronRight className="w-4 h-4" />
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image and Content */}
        <div className="w-full lg:w-3/4 flex flex-col">
          <div className="bg-gray-100 p-4 md:p-6 rounded-md flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                THE NEW STANDARD
              </h2>
              <p className="text-gray-500 mt-2 mb-4">
                UNDER FAVORABLE SMARTWATCHES
              </p>
              <p className="text-gray-800 text-xl md:text-2xl font-bold mb-4">
                From{" "}
                <span className="text-black">
                  $749<sup>99</sup>
                </span>
              </p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300">
                Start Buying
              </button>
            </div>
            <img
              src="https://placehold.co/600x400"
              alt="Smartwatch"
              className="w-48 h-48 md:w-60 md:h-60 object-contain mt-4 md:mt-0"
            />
          </div>

          {/* Mini Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border rounded-md p-4 flex flex-col items-center text-center">
              <img src="https://placehold.co/600x400" alt="Camera" />
              <p className="text-sm mt-2 font-semibold">
                Catch big deals on the cameras
              </p>
              <a
                href="https://placehold.co/600x400"
                className="text-yellow-500 mt-1 text-sm"
              >
                Shop now →
              </a>
            </div>
            <div className="bg-white border rounded-md p-4 flex flex-col items-center text-center">
              <img src="https://placehold.co/600x400" alt="Tablet" />
              <p className="text-sm mt-2 font-semibold">
                Tablets, Smartphones and more
              </p>
              <p className="text-xs text-gray-500">
                Up to <span className="text-yellow-500 font-bold">70%</span>
              </p>
            </div>
            <div className="bg-white border rounded-md p-4 flex flex-col items-center text-center">
              <img src="https://placehold.co/600x400" alt="PC" />
              <p className="text-sm mt-2 font-semibold">
                Shop the hottest products
              </p>
              <a
                href="https://placehold.co/600x400"
                className="text-yellow-500 mt-1 text-sm"
              >
                Shop now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
