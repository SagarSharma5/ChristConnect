import React, { useState } from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons"; // Regular heart icon
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons"; // Solid heart icon
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

function Events() {
  // Generate random like counts for each event
  const generateRandomLikes = () => Math.floor(Math.random() * 100);

  // State to manage the events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "National Science Day at Christ University",
      img: "/event1.jpg",
      likes: generateRandomLikes(),
      liked: false,
    },
    {
      id: 2,
      title: "Pedagogic League 2024",
      img: "/event2.jpeg",
      likes: generateRandomLikes(),
      liked: false,
    },
    {
      id: 3,
      title: "Yoga Day, Christ University",
      img: "/event3.jpeg",
      likes: generateRandomLikes(),
      liked: false,
    },
    {
      id: 4,
      title: "Excitino 2023",
      img: "/event4.jpeg",
      likes: generateRandomLikes(),
      liked: false,
    },
  ]);

  // Function to handle the like button click
  const handleLike = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id
          ? {
              ...event,
              liked: !event.liked,
              likes: event.liked ? event.likes - 1 : event.likes + 1,
            } // Toggle liked state and update likes
          : event
      )
    );
  };

  return (
    <div className="flex flex-row p-4 justify-center">
      <Navbar />
      <div className="flex pt-8 flex-col w-[600px] justify-start">
        <h1 className="text-4xl font-bold font-serif text-darkblue mb-4">
          Events
        </h1>
        {/* Render events with like, comment, and share functionality */}
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded p-4 shadow mb-4 border-[1px] border-opacity-30 border-black"
          >
            <img
              src={event.img}
              alt="Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <p className="text-darkblue pl-1">{event.title}</p>
            <div className="gap-x-2 flex">
              <button
                className="mt-2 px-2 text-blue rounded-full border-blue border-2"
                onClick={() => handleLike(event.id)}
              >
                <FontAwesomeIcon
                  icon={event.liked ? SolidHeart : RegularHeart}
                  className={`mr-1 ${
                    event.liked ? "text-red-500" : "text-darkblue"
                  }`}
                />
                {event.likes}
              </button>
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faComment} className="mr-1" />
                {0}{" "}
                {/* Dummy comment count; you can change this to a real comment count if needed */}
              </button>
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faShare} className="mr-1" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
      <News />
    </div>
  );
}

export default Events;
