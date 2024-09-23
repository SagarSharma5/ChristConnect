import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import News from "../components/News";

function LandingPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from Django API
    fetch("http://127.0.0.1:8000/viewAllPosts/")
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (post_id) => {
    console.log("Deleting post with ID:", post_id); // Log post_id for debugging

    // Show a confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      fetch(`http://127.0.0.1:8000/deletePost/${post_id}/`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setPosts(posts.filter((post) => post.post_id !== post_id)); // Update state by filtering out deleted post
          } else {
            console.error("Error deleting post:", response);
          }
        })
        .catch((error) => console.error("Error deleting post:", error));
    }
  };

  return (
    <div className="flex flex-row p-4 justify-center">
      <Navbar />
      <div className="flex flex-col gap-y-4 pt-8 max-w-full sm:px-0 sm:w-[600px] justify-start">
        <h1 className="text-4xl font-bold font-serif text-darkblue">
          Welcome, Sagar!
        </h1>
        <div className="mb-4">
          <Create addPost={addPost} />
        </div>
        <div className="gap-y-4 pt-4 border-t-[1px] border-black border-opacity-20 w-full">
          {posts.map((post) => (
            <div
              key={post.post_id}
              className="text-darkblue items-center flex flex-col justify-center relative"
            >
              <div className="bg-white text-darkblue w-full p-4 shadow mb-4 gap-y-4 rounded-xl items-center flex flex-col border-[1px] border-black border-opacity-40 relative">
                <div className="flex flex-row w-full justify-start">
                  <div className="flex justify-center items-center w-[40px] h-[40px] ml-2 overflow-hidden rounded-full bg-white">
                    <img
                      src={post.profile_image || "/user.jpg"}
                      alt="Profile"
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-lg sm:text-xl">{post.user_id}</p>
                    <p className="text-xs sm:text-sm">
                      {post.user_designation}
                    </p>
                  </div>
                </div>
                <p className="text-base sm:text-lg w-full mt-2 sm:ml-4">
                  {post.post_text}
                </p>
                {post.post_image && (
                  <img
                    src={post.post_image}
                    alt="Post"
                    className="w-full sm:w-96 h-48 sm:h-64 object-cover rounded mb-4 bg-bgcolor"
                  />
                )}

                {post.user_id === "SagarSharma" && (
                  <button
                    className="absolute top-2 right-2 bg-transparent hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-full transition duration-300"
                    onClick={() => deletePost(post.post_id)}
                  >
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <News />
    </div>
  );
}

export default LandingPage;
