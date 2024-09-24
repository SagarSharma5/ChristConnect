import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import News from "../components/News";

function LandingPage() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

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
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      fetch(`http://127.0.0.1:8000/deletePost/${post_id}/`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setPosts(posts.filter((post) => post.post_id !== post_id));
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
          Welcome, {username || "Guest"}!
        </h1>
        <div className="mb-4">
          <Create addPost={addPost} username={username} />
        </div>
        <div className="gap-y-4 pt-4 border-t-[1px] border-black border-opacity-20 w-full">
          {posts.map((post) => (
            <div
              key={post.post_id}
              className="text-darkblue items-center flex flex-col justify-center relative"
            >
              <div className="bg-white text-darkblue w-full p-4 shadow mb-4  rounded-xl  flex flex-col border-[1px] border-black border-opacity-40 relative">
                <div className="flex flex-row w-full justify-between">
                  <div className="flex flex-row">
                    <div className="flex justify-center items-center w-[40px] h-[40px] ml-1 overflow-hidden rounded-full bg-white">
                      <img
                        src={post.profile_image || "/user.jpg"}
                        alt="Profile"
                        className="w-20 h-20 object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                      <p className="text-lg font-semibold font-sans mb-1  sm:text-xl">
                        {post.user_id}
                      </p>
                    </div>
                  </div>

                  <div>
                    {post.user_id === username && (
                      <button
                        className=" bg-transparent hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-full transition duration-300"
                        onClick={() => deletePost(post.post_id)}
                      >
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  {post.post_image && (
                    <>
                      {console.log("Post Image URL:", post.post_image)}
                      <img
                        src={post.post_image}
                        alt="Post"
                        className="w-full h-auto object-cover rounded"
                      />
                    </>
                  )}
                </div>
                <div className="flex flex-row">
                  <p className="text-lg ml-2 w-full">{post.post_text}</p>
                </div>
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
