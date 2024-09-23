import React from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";

function CampusMapLocation() {
  return (
    <div className="flex flex-row p-4 justify-center">
      <Navbar />
      <div className="flex pt-8 flex-col w-[600px] justify-start">
        <h1 className="text-4xl font-bold font-serif text-darkblue mb-4">
          Campus Map Location
        </h1>
        {/* Dummy map */}
        <div className="bg-white rounded flex flex-col items-center p-4 shadow mb-4 border-[1px] border-opacity-30 border-black">
          <img
            src="/campus.jpg"
            alt="campus_map"
            className="object-cover rounded-xl border-[1px] border-opacity-30 border-black"
          />
          <button className="w-fit text-white mt-4 p-4 rounded-full bg-blue">
            Click to zoom
          </button>
        </div>
      </div>
      <News />
    </div>
  );
}

export default CampusMapLocation;
