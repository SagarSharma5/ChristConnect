import React, { useState } from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons"; // Regular heart icon
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons"; // Solid heart icon
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

function RoommateListing() {
  // State to manage the roommate listings with time in minutes for sorting
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Looking for Female Roommate",
      time: "2hr ago",
      timeInMinutes: 120, // converted time for sorting
      likes: 52,
      liked: false,
      comments: 7,
    },
    {
      id: 2,
      title: "Flatmate needed urgently",
      time: "1hr ago",
      timeInMinutes: 60, // converted time for sorting
      likes: 45,
      liked: false,
      comments: 4,
    },
    {
      id: 3,
      title: "Roommate needed for PG",
      time: "5hr ago",
      timeInMinutes: 300, // converted time for sorting
      likes: 38,
      liked: false,
      comments: 17,
    },
    {
      id: 4,
      title: "PG Roommate 3-sharing needed",
      time: "6hr ago",
      timeInMinutes: 360, // converted time for sorting
      likes: 33,
      liked: false,
      comments: 5,
    },
  ]);

  // State to manage the sorting option
  const [sortOption, setSortOption] = useState("Top");

  // Function to sort listings based on the selected option
  const sortedListings = () => {
    return [...listings].sort((a, b) => {
      if (sortOption === "Top") {
        return b.likes - a.likes; // Sort by likes descending
      } else if (sortOption === "Recent") {
        return a.timeInMinutes - b.timeInMinutes; // Sort by time descending
      }
      return 0;
    });
  };

  // Function to handle the like button click
  const handleLike = (id) => {
    setListings((prevListings) =>
      prevListings.map((listing) =>
        listing.id === id
          ? {
              ...listing,
              liked: !listing.liked,
              likes: listing.liked ? listing.likes - 1 : listing.likes + 1,
            } // Toggle liked state and update likes
          : listing
      )
    );
  };

  return (
    <div className="flex flex-row p-4 justify-center">
      <Navbar />
      <div className="flex flex-col gap-y-4 pt-4 max-w-full sm:px-0 sm:w-[600px] justify-start">
        <div className="flex-1 pt-4">
          <h1 className="text-4xl font-bold font-serif text-darkblue mb-4">
            Roommate Listings
          </h1>

          <div className="flex items-center w-full mb-4 font-sans">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="ml-2 text-darkblue whitespace-nowrap flex flex-row items-center">
              Sort by:
              <select
                className="ml-2 text-darkblue font-semibold border bg-gray-200 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)} // Update sorting option
              >
                <option value="Top">Top</option>
                <option value="Recent">Recent</option>
              </select>
            </span>
          </div>

          {/* Render sorted roommate listings */}
          {sortedListings().map((listing) => (
            <div
              key={listing.id}
              className="flex flex-col bg-white rounded p-4 mb-4 border-[1px] shadow-xl border-darkblue"
            >
              <div className="flex flex-row justify-between">
                <p className="text-darkblue text-lg font-semibold font-sans">
                  {listing.title}
                </p>
                <p className="text-darkblue mt-1">{listing.time}</p>
              </div>

              <div className="gap-x-2 flex">
                <button
                  className="mt-2 px-2 text-blue rounded-full border-blue border-2"
                  onClick={() => handleLike(listing.id)}
                >
                  <FontAwesomeIcon
                    icon={listing.liked ? SolidHeart : RegularHeart}
                    className={`mr-1 ${
                      listing.liked ? "text-red-500" : "text-darkblue"
                    }`}
                  />
                  {listing.likes}
                </button>
                <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                  <FontAwesomeIcon icon={faComment} className="mr-1" />
                  {listing.comments}
                </button>
                <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                  <FontAwesomeIcon icon={faShare} className="mr-1" />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <News />
    </div>
  );
}

export default RoommateListing;
