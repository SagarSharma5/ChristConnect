import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import News from "../components/News";

function DiscussionForum() {
  return (
    <div className="flex flex-row p-4 justify-center">
      <Navbar />
      <div className="flex pt-8 flex-col w-[600px] justify-start">
        <h1 className="text-4xl font-bold font-serif text-darkblue mb-4">
          Discussion Threads
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

        {/* Dummy discussion threads */}
        <div className="flex flex-col bg-white rounded p-4  mb-4 border-[1px] shadow-xl border-darkblue">
          <div className="flex flex-row justify-between">
            <p className="text-darkblue text-lg font-semibold font-sans">
              Auditions tomorrow for Natyarpana!
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
              Science Exhibition 2024
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
              Why is the campus so big?
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
              Best faculty in the college?
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
        <div className="flex flex-col bg-white rounded p-4  mb-4 border-[1px] shadow-xl border-darkblue">
          <div className="flex flex-row justify-between">
            <p className="text-darkblue text-lg font-semibold font-sans">
              Where is Block 3?
            </p>
            <p className="text-darkblue mt-1">12hr ago</p>
          </div>

          <div className="gap-x-2 flex">
            <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faHeart} className="mr-1" />
              30
            </button>
            <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faComment} className="mr-1" />2
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
              Bird's Park is the best!
            </p>
            <p className="text-darkblue mt-1">23hr ago</p>
          </div>

          <div className="gap-x-2 flex">
            <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faHeart} className="mr-1" />
              25
            </button>
            <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faComment} className="mr-1" />0
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
              Ethnic day was a blast!
            </p>
            <p className="text-darkblue mt-1">16hr ago</p>
          </div>

          <div className="gap-x-2 flex">
            <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faHeart} className="mr-1" />
              22
            </button>
            <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faComment} className="mr-1" />1
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
              Do we really need 85% attendance?
            </p>
            <p className="text-darkblue mt-1">5min ago</p>
          </div>

          <div className="gap-x-2 flex">
            <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faHeart} className="mr-1" />
              20
            </button>
            <button className="mt-2  px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faComment} className="mr-1" />0
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
              Hey Christites!
            </p>
            <p className="text-darkblue mt-1">3hr ago</p>
          </div>

          <div className="gap-x-2 flex">
            <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
              <FontAwesomeIcon icon={faHeart} className="mr-1" />
              18
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
      </div>
      <News />
    </div>
  );
}

export default DiscussionForum;
