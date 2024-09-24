import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { RiGroup3Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [hoverLabel, setHoverLabel] = useState(""); // To store hover label

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    const username = localStorage.getItem("username");

    if (!username) {
      // If no user is logged in, redirect to the login page straight away
      navigate("/loginsignup");
    } else {
      // If a user is logged in, show the confirmation popup
      const confirmLogout = window.confirm("Are you sure you want to log out?");

      if (confirmLogout) {
        // Proceed with logout if user confirms
        localStorage.removeItem("username");
        navigate("/loginsignup"); // Redirect to login page
      }
      // If user cancels, do nothing
    }
  };

  return (
    <div
      className={`w-96 text-white min-h-screen px-[20px] items-center flex flex-col`}
    >
      <div
        className={`w-[340px] bg-blue rounded-xl h-[600px] my-4 flex flex-col drop-shadow-lg`}
      >
        <div className="flex flex-col mt-6">
          <nav className="ml-6 text-md">
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
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`mt-[10px] w-[350px] h-18 flex flex-row justify-between items-center rounded-xl bg-blue p-4 gap-x-[1px] transition-all duration-500 cursor-pointer`}
      >
        <div className="flex flex-row">
          <div className="flex justify-center items-center w-[40px] h-[40px] ml-2 mt-1 overflow-hidden rounded-full bg-white">
            <img
              src="/user.jpg"
              alt="Profile"
              className="w-[90px] h-[90px] object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="ml-2 mt-2 text-xl">{username || "Guest"}</p>
          </div>
        </div>

        <div
          className="relative flex items-center"
          onMouseEnter={() => setHoverLabel(username ? "LogOut" : "Sign In")}
          onMouseLeave={() => setHoverLabel("")} // Clear label on mouse leave
        >
          <IoLogOutOutline
            className={`mr-2 text-3xl cursor-pointer transition-colors duration-300 ${
              username
                ? "hover:text-red-500" // Red color when logged in
                : "hover:text-green-500" // Green color when not logged in
            }`}
            onClick={handleLogout}
          />
          {/* Tooltip - appears on hover */}
          {hoverLabel && (
            <span className="absolute bottom-[30px] left-0 w-[60px] px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
              {hoverLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
