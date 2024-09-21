import React from "react";

function CampusMapLocation() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row p-4">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Campus Map Location</h1>
        {/* Dummy map */}
        <div className="bg-white rounded p-4 shadow mb-4">
          <p>Map content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default CampusMapLocation;
