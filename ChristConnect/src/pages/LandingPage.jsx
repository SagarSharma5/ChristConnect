import React, { useEffect, useState } from "react";
import Create from "../components/Create";

function LandingPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from Django API
    fetch("http://127.0.0.1:8000/viewAllPosts/")
      .then(response => {
        if (!response.ok) {
          // Handle non-2xx HTTP responses
          return response.text().then(text => { throw new Error(text) });
        }
        return response.json(); // Parse JSON if the response is OK
      })
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching posts:", error)); // Log the error
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add the new post to the posts state
  };

  return (
    <div className="flex flex-col gap-y-[1px] w-[550px] justify-center">
      <div className="my-4">
        <Create addPost={addPost} />
      </div>
      <div className="gap-y-2 pt-4 border-t-[1px] border-black border-opacity-20 w-full">
        {posts.map(post => (
          <div key={post.id} className="text-darkblue items-center flex flex-col justify-center">
            <div className="bg-white text-darkblue w-full p-4 shadow mb-4 gap-y-4 rounded-xl items-center flex flex-col border-[1px] border-black border-opacity-40">
              <div className="flex flex-row mr-[330px]">
                <div className="flex justify-center items-center w-[40px] h-[40px] ml-2 overflow-hidden rounded-full bg-white">
                  <img
                    src={post.profile_image || "/user.jpg"}
                    alt="Profile"
                    className="w-[90px] h-[90px] object-cover flex justify-center items-center"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="ml-2 text-xl">{post.user_id}</p>
                  <p className="ml-2 text-sm">{post.user_designation}</p>
                </div>
              </div>
              <p className="ml-4">
                {post.post_text}
              </p>
              {post.post_image && ( // Only render the image if post_image exists
                <img
                  src={post.post_image}
                  alt="Post"
                  className="w-96 h-64 object-cover rounded mb-4 bg-bgcolor"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
