import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* App download links */}
        <div className="text-center mb-8">
          <p className="font-semibold text-lg">
            For better experience, download the Swiggy app now
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32"/>
            <img src="https://banner2.cleanpng.com/20180802/wf/dbafb3f2b9df40c93c2a44cbb5ab9171.webp" alt="App Store" className="w-40"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-700">
          {/* Logo and copyright */}
          <div className="col-span-1">
            <img
              src="images/swiggy.svg"
              alt="Swiggy Logo"
              className="w-40 mb-4"
            />
            <p>© 2024 Swiggy Limited</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-gray-500">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Swiggy Genie</li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-semibold mb-2">Contact us</h3>
            <ul className="space-y-1 text-gray-500">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
            <div>
            <h3 className="font-semibold mb-2 mt-6">Legal</h3>
            <ul className="space-y-1 text-gray-500">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Refund & Cancellation Policy</li>
            </ul>
          </div>
          </div>

          {/* Available Locations */}
          <div>
            <h3 className="font-semibold mb-2">Available in:</h3>
            <ul className="space-y-1 text-gray-500">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>
                <button className="border border-gray-300 px-2 py-1 rounded flex">
                <p>  679 cities </p> <RiArrowDownSLine className="mt-1 ms-1"/>
                </button>
              </li>
            </ul>
          </div>

          {/* Life at Swiggy */}
          <div>
            <h3 className="font-semibold mb-2">Life at Swiggy</h3>
            <ul className="space-y-1 text-gray-500">
              <li>Explore with Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
            <div className="mt-10 md:mt-0">
            <h3 className="font-semibold mb-2 mt-10">Social Links</h3>
            <div className="flex space-x-4 ">
              <FaLinkedin size={20} />
              <FaInstagram size={20} />
              <FaFacebook size={20} />
              <FaPinterest size={20} />
              <FaTwitter size={20} />
            </div>
          </div>
          </div>

          {/* Legal Links */}
        
          
        </div>
      </div>
    </footer>
  );
}
