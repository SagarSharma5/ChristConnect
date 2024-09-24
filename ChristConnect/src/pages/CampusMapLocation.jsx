import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";

function CampusMapLocation() {
  // State to manage popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // State to manage zooming
  const [isZoomed, setIsZoomed] = useState(false);
  // Ref to hold the image element
  const imgRef = useRef(null);
  // State to hold image position
  const [position, setPosition] = useState({ top: 0, left: 0 });
  // State to hold initial mouse position for dragging
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
    setIsZoomed(false); // Reset zoom state when opening the popup
    setPosition({ top: 0, left: 0 }); // Reset position
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setIsZoomed(false); // Reset zoom state when closing
  };

  // Function to handle clicks outside the popup
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".popup-content")) {
      closePopup();
    }
  };

  // Toggle zoom state on image click
  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
    if (!isZoomed) {
      setPosition({ top: 0, left: 0 }); // Reset position when zooming in
    }
  };

  // Handle mouse down event for dragging
  const handleMouseDown = (event) => {
    if (isZoomed) {
      setDragging(true);
      setStartPos({ x: event.clientX, y: event.clientY });
    }
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (event) => {
    if (dragging) {
      const deltaX = event.clientX - startPos.x;
      const deltaY = event.clientY - startPos.y;
      setPosition((prev) => ({
        top: prev.top + deltaY,
        left: prev.left + deltaX,
      }));
      setStartPos({ x: event.clientX, y: event.clientY });
    }
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setDragging(false);
  };

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
          <button
            onClick={openPopup}
            className="w-fit text-white mt-4 p-4 rounded-full bg-blue"
          >
            Click to zoom
          </button>
        </div>
      </div>
      <News />

      {/* Popup Component */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleOutsideClick}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden popup-content">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-3xl"
              style={{ width: "40px", height: "40px", lineHeight: "40px" }} // Increased size
            >
              &times;
            </button>
            <img
              ref={imgRef}
              src="/campus.jpg"
              alt="campus_map_full"
              className={`object-contain transition-transform duration-300`}
              style={{
                maxHeight: "90vh", // Limit height to viewport height
                maxWidth: "90vw", // Limit width to viewport width
                transform: isZoomed ? "scale(2)" : "scale(1)", // Zoom level
                position: "relative",
                top: position.top,
                left: position.left,
                cursor: isZoomed ? "move" : "pointer", // Change cursor when zoomed
              }}
              onClick={toggleZoom} // Toggle zoom on click
              onMouseDown={handleMouseDown} // Start dragging
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusMapLocation;
