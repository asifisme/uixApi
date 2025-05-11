import React from "react";

import { Smile, Rss, Globe } from "lucide-react";

//import { Link } from "react-router-dom";

const FooterLayout = () => {
  return (
    <footer className="text-gray-700 text-sm font-medium">
      {/* Newsletter Signup */}
      <div className="bg-yellow-400 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-black font-semibold">
          ✉️ Sign up to Newsletter
          <span className="font-normal ml-2 text-sm text-gray-900">
            ...and receive <strong>$20 coupon</strong> for first shopping.
          </span>
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-l-full border border-gray-300 w-64"
          />
          <button className="px-4 py-2 bg-gray-800 text-white rounded-r-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-10 bg-white border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact Info */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-900">
            electro<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-gray-600">
            Got questions? Call us 24/7!
            <br />
            <strong>(800) 8001-8588, (0600) 874 548</strong>
          </p>
          <p className="text-gray-600">
            <strong>Contact info</strong>
            <br />
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Find it Fast */}
        <div>
          <h3 className="font-semibold mb-3">Find it Fast</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>TV & Audio</li>
            <li>Gadgets</li>
            <li>Car Electronic & GPS</li>
            <li>Printers & Ink</li>
            <li>Software</li>
            <li>Office Supplies</li>
            <li>Computer Components</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-gray-600">
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wish List</li>
            <li>Customer Service</li>
            <li>Returns / Exchange</li>
            <li>FAQs</li>
            <li>Product Support</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="space-y-4">
          <h3 className="font-semibold">Connect With Us</h3>
          <div className="flex items-center gap-4 text-gray-600">
            <Smile className="w-5 h-5" />
            <Smile className="w-5 h-5" />
            <Rss className="w-5 h-5" />
            <Smile className="w-5 h-5" />
            <Globe className="w-5 h-5" />
            <Smile className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
        <p>
          © <strong>Electro</strong> – All rights reserved
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <img
            src="https://placehold.co/400"
            alt="MasterCard"
            className="h-6"
          />
          <img src="https://placehold.co/400" alt="Visa" className="h-6" />
          <img src="https://placehold.co/400" alt="PayPal" className="h-6" />
          <img src="https://placehold.co/400" alt="Maestro" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
