import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { RiGroup3Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const stickyPoint = 110; // The point where you want the navbar to become sticky
    setIsSticky(offset >= stickyPoint);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-96 text-white min-h-screen px-[20px]  flex flex-col items-center`}
    >
      <div
        className={`w-[350px] bg-blue rounded-xl h-[600px] my-4 flex flex-col drop-shadow-lg transition-all duration-500 ${
          isSticky ? "fixed top-0 shadow-lg" : "relative"
        }`}
      >
        <div className="flex flex-col mt-6">
          <nav className="ml-10 text-md">
            <ul>
              <li className="mb-2 h-[50px] flex flex-row">
                <Link
                  to="/"
                  className="p-4 rounded-full h-full hover:bg-secondary hover:text-white text-lg flex items-center transition-colors duration-300"
                >
                  <IoMdHome className="text-xl mr-2 mb-[1px]" />
                  Home
                </Link>
              </li>
              <li className="mb-2 h-[50px] flex flex-row">
                <Link
                  to="/discussionforum"
                  className="p-4 rounded-full h-full hover:bg-secondary hover:text-white text-lg flex items-center transition-colors duration-300"
                >
                  <IoMdChatboxes className="text-xl mr-2 mb-[1px]" />
                  Discussion Forum
                </Link>
              </li>
              <li className="mb-2 h-[50px] flex flex-row">
                <Link
                  to="/events"
                  className="p-4 rounded-full h-full hover:bg-secondary hover:text-white text-lg flex items-center transition-colors duration-300"
                >
                  <MdEmojiEvents className="text-xl mr-2 mb-[1px]" />
                  Events
                </Link>
              </li>
              <li className="mb-2 h-[50px] flex flex-row">
                <Link
                  to="/campusmaplocation"
                  className="p-4 rounded-full h-full hover:bg-secondary hover:text-white text-lg flex items-center transition-colors duration-300"
                >
                  <FaMap className="text-xl mr-2 mb-[1px]" />
                  Campus Map
                </Link>
              </li>
              <li className="mb-2 h-[50px] flex flex-row">
                <Link
                  to="/roommatelisting"
                  className="p-4 rounded-full h-full hover:bg-secondary hover:text-white text-lg flex items-center transition-colors duration-300"
                >
                  <RiGroup3Fill className="text-xl mr-2 mb-[1px]" />
                  Roommate Listing
                </Link>
              </li>
              <li className="mt-52 h-[50px] flex flex-row">
                <Link
                  to="/roommatelisting"
                  className="p-4 rounded-full h-full hover:bg-secondary hover:text-white text-lg flex items-center transition-colors duration-300"
                >
                  <IoSettingsSharp className="text-xl mr-2 mb-[1px]" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`mt-[10px] w-[350px] h-18 flex flex-row items-center rounded-xl bg-blue p-4 gap-x-[1px] transition-all duration-500 cursor-pointer ${
          isSticky ? "fixed top-[630px] shadow-lg" : "relative"
        }`}
      >
        <div className="flex justify-center items-center w-[36px] h-[36px] ml-2 overflow-hidden rounded-full bg-white">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-[80px] h-[80px] object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="ml-2 text-xl">Sagar Sharma</p>
          <p className="ml-2 text-sm">Student</p>
        </div>
        <IoLogOutOutline className="ml-24 text-3xl hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
