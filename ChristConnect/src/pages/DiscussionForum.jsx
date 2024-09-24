import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons"; // Regular heart icon
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons"; // Solid heart icon
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import News from "../components/News";

function DiscussionForum() {
  // State to manage the discussion posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Auditions tomorrow for Natyarpana!",
      time: "2hr ago",
      likes: 52,
      comments: 7,
      liked: false,
    },
    {
      id: 2,
      title: "Science Exhibition 2024",
      time: "1hr ago",
      likes: 45,
      comments: 4,
      liked: false,
    },
    {
      id: 3,
      title: "Why is the campus so big?",
      time: "5hr ago",
      likes: 38,
      comments: 17,
      liked: false,
    },
    {
      id: 4,
      title: "Best faculty in the college?",
      time: "6hr ago",
      likes: 33,
      comments: 5,
      liked: false,
    },
    {
      id: 5,
      title: "Where is Block 3?",
      time: "12hr ago",
      likes: 30,
      comments: 2,
      liked: false,
    },
    {
      id: 6,
      title: "Bird's Park is the best!",
      time: "23hr ago",
      likes: 25,
      comments: 0,
      liked: false,
    },
    {
      id: 7,
      title: "Ethnic day was a blast!",
      time: "16hr ago",
      likes: 22,
      comments: 1,
      liked: false,
    },
    {
      id: 8,
      title: "Do we really need 85% attendance?",
      time: "5min ago",
      likes: 20,
      comments: 0,
      liked: false,
    },
    {
      id: 9,
      title: "Hey Christites!",
      time: "3hr ago",
      likes: 18,
      comments: 4,
      liked: false,
    },
  ]);

  // State to manage the sorting option
  const [sortOption, setSortOption] = useState("Top");

  // Function to sort posts based on the selected option
  const sortedPosts = () => {
    return [...posts].sort((a, b) => {
      if (sortOption === "Top") {
        return b.likes - a.likes; // Sort by likes descending
      } else if (sortOption === "Recent") {
        const aTime = parseTime(a.time);
        const bTime = parseTime(b.time);
        return aTime - bTime; // Sort by time descending
      }
      return 0;
    });
  };

  // Helper function to parse the time string into a comparable number
  const parseTime = (time) => {
    const num = parseInt(time);
    if (time.includes("hr")) {
      return num; // hours
    } else if (time.includes("min")) {
      return num / 60; // convert minutes to hours for comparison
    }
    return 0; // default case
  };

  // Function to handle the like button click
  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            } // Toggle liked state and update likes
          : post
      )
    );
  };

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
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)} // Update sorting option
            >
              <option value="Top">Top</option>
              <option value="Recent">Recent</option>
            </select>
          </span>
        </div>

        {/* Render sorted discussion posts */}
        {sortedPosts().map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-white rounded p-4 mb-4 border-[1px] shadow-xl border-darkblue"
          >
            <div className="flex flex-row justify-between">
              <p className="text-darkblue text-lg font-semibold font-sans">
                {post.title}
              </p>
              <p className="text-darkblue mt-1">{post.time}</p>
            </div>

            <div className="gap-x-2 flex">
              <button
                className="mt-2 px-2 text-blue rounded-full border-blue border-2"
                onClick={() => handleLike(post.id)}
              >
                <FontAwesomeIcon
                  icon={post.liked ? SolidHeart : RegularHeart}
                  className={`mr-1 ${
                    post.liked ? "text-red-600" : "text-darkblue"
                  }`}
                />
                {post.likes}
              </button>
              <button className="mt-2 px-2 text-blue rounded-full border-blue border-2">
                <FontAwesomeIcon icon={faComment} className="mr-1" />
                {post.comments}
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

export default DiscussionForum;
