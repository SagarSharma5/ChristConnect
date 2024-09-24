import React from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

function RoommateListing() {
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
                defaultValue="Top"
              >
                <option value="Top">Top</option>
                <option value="Recent">Recent</option>
              </select>
            </span>
          </div>
          {/* Dummy roommate listings */}
          <div className="flex flex-col bg-white rounded p-4  mb-4 border-[1px] shadow-xl border-darkblue">
            <div className="flex flex-row justify-between">
              <p className="text-darkblue text-lg font-semibold font-sans">
                Looking for Female Roommate
              </p>
              <p className="text-darkblue mt-1">2hr ago</p>
            </div>

            <div className="gap-x-2 flex">
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faHeart} className="mr-1" />
                52
              </button>
              <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faComment} className="mr-1" />7
              </button>
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faShare} className="mr-1" />
                Share
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded p-4  mb-4 border-[1px] shadow-xl border-darkblue">
            <div className="flex flex-row justify-between">
              <p className="text-darkblue text-lg font-semibold font-sans">
                Flatmate needed urgently
              </p>
              <p className="text-darkblue mt-1">1hr ago</p>
            </div>

            <div className="gap-x-2 flex">
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faHeart} className="mr-1" />
                45
              </button>
              <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faComment} className="mr-1" />4
              </button>
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faShare} className="mr-1" />
                Share
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded p-4  mb-4 border-[1px] shadow-xl border-darkblue">
            <div className="flex flex-row justify-between">
              <p className="text-darkblue text-lg font-semibold font-sans">
                Roommate needed for PG
              </p>
              <p className="text-darkblue mt-1">5hr ago</p>
            </div>

            <div className="gap-x-2 flex">
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faHeart} className="mr-1" />
                38
              </button>
              <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faComment} className="mr-1" />
                17
              </button>
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faShare} className="mr-1" />
                Share
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded p-4  mb-4 border-[1px] shadow-xl border-darkblue">
            <div className="flex flex-row justify-between">
              <p className="text-darkblue text-lg font-semibold font-sans">
                PG Roommate 3-sharing needed
              </p>
              <p className="text-darkblue mt-1">6hr ago</p>
            </div>

            <div className="gap-x-2 flex">
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faHeart} className="mr-1" />
                33
              </button>
              <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faComment} className="mr-1" />5
              </button>
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faShare} className="mr-1" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <News />
    </div>
  );
}

export default RoommateListing;
