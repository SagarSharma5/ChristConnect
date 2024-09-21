import React from "react";

function Events() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row p-4">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Events</h1>
        {/* Dummy events */}
        <div className="bg-white rounded p-4 shadow mb-4">
          <img
            src="/event-image.jpg"
            alt="Event"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p>Event details go here.</p>
          <button className="mt-2 text-blue-500">Comment</button>
          <button className="mt-2 text-blue-500">Like</button>
          <button className="mt-2 text-blue-500">Share</button>
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

export default Events;
