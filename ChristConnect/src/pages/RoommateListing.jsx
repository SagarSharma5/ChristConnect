import React from "react";

function RoommateListing() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row p-4">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Roommate Listings</h1>
        {/* Dummy roommate listings */}
        <div className="bg-white rounded p-4 shadow mb-4">
          <p>Roommate listing content goes here.</p>
          <button className="mt-2 text-blue-500">Comment</button>
          <button className="mt-2 text-blue-500">Like</button>
        </div>
      </div>
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="bg-white rounded p-4 shadow mb-4">
          <p>Filter options go here.</p>
        </div>
      </div>
    </div>
  );
}

export default RoommateListing;
