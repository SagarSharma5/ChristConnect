import React from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";

function Events() {
  return (
    <div className="flex flex-row p-4 justify-center">
      <Navbar />
      <div className="flex pt-8 flex-col w-[600px] justify-start">
        <h1 className="text-4xl font-bold font-serif text-darkblue mb-4">
          Events
        </h1>
        {/* Dummy events */}
        <div className="bg-white rounded p-4 shadow mb-4 border-[1px] border-opacity-30 border-black">
          <img
            src="/event1.jpg"
            alt="Event"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <p className="text-darkblue pl-1">
            National Science Day at Christ University
          </p>
          <div className="gap-x-2 flex">
            <button className="mt-2 py-1 px-3 text-white rounded-full bg-blue">
              Like
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Comment
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Share
            </button>
          </div>
        </div>
        <div className="bg-white rounded p-4 shadow mb-4 border-[1px] border-opacity-30 border-black">
          <img
            src="/event2.jpeg"
            alt="Event"
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <p className="text-darkblue pl-1">Pedagogic League 2024</p>
          <div className="gap-x-2 flex">
            <button className="mt-2 py-1 px-3 text-white rounded-full bg-blue">
              Like
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Comment
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Share
            </button>
          </div>
        </div>
        <div className="bg-white rounded p-4 shadow mb-4 border-[1px] border-opacity-30 border-black">
          <img
            src="/event3.jpeg"
            alt="Event"
            className="w-full h-56 object-cover rounded-xl mb-4"
          />
          <p className="text-darkblue pl-1">Yoga Day, Christ University</p>
          <div className="gap-x-2 flex">
            <button className="mt-2 py-1 px-3 text-white rounded-full bg-blue">
              Like
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Comment
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Share
            </button>
          </div>
        </div>
        <div className="bg-white rounded p-4 shadow mb-4 border-[1px] border-opacity-30 border-black">
          <img
            src="/event4.jpeg"
            alt="Event"
            className="w-full h-84 object-cover rounded-xl mb-4"
          />
          <p className="text-darkblue">Excitino 2023</p>
          <div className="gap-x-2 flex">
            <button className="mt-2 py-1 px-3 text-white rounded-full bg-blue">
              Like
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Comment
            </button>
            <button className="mt-2 py-1 px-2 text-white rounded-full bg-blue">
              Share
            </button>
          </div>
        </div>
      </div>
      <News />
    </div>
  );
}

export default Events;
