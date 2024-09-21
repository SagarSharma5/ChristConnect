import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

const Create = ({ addPost }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    // Define the data to send in the POST request
  const postData = {
    "user_id": "SagarSharma",  // User ID
    "user_designation": "Student", // Role
    "fname": "Sagar",  // First name
    "lname": "Sharma",   // Last name
    "post_text": content,  // Use 'content' as 'post_text'
  };


    // POST request to Django API
    fetch("http://127.0.0.1:8000/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then(response => {
        if (!response.ok) {
          // Handle non-2xx HTTP responses
          return response.text().then(text => { throw new Error(text) });
        }
        return response.json(); // Parse JSON if the response is OK
      })
      .then(data => {
        console.log("Post created:", data);
        addPost(data); // Add the new post to the list
        setContent(""); // Clear form
      })
      .catch(error => console.error("Error posting data:", error));
  };

  return (
    <div className="w-full flex justify-center h-[170px]">
      <div className="flex flex-row bg-white rounded-2xl items-center gap-x-4 border-[1px] border-black border-opacity-50 w-full">
        <div className="flex ml-4 mb-8">
          <FaUserCircle className="text-6xl text-black" />
        </div>
        <div className="flex flex-col w-full mr-6 gap-y-2">
          <div className="flex w-full mt-4 text-black px-2 bg-bgcolor rounded-2xl h-20">
            <input
              type="text"
              placeholder="Write Something!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-[400px] rounded-2xl placeholder:text-darkblue bg-bgcolor focus:outline-none text-dark"
            />
          </div>
          <div className="flex flex-row justify-end gap-x-4">
            <div className="flex">
              <button className="bg-bgcolor text-black px-2 h-8 rounded-lg flex flex-row justify-center items-center gap-x-[1px]">
                <CiImageOn className="text-xl" />
                <p className="mt-[1px]">Add Media</p>
              </button>
            </div>
            <div className="flex">
              <button 
                onClick={handleSubmit} 
                className="bg-blue text-white w-16 h-8 rounded-2xl"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
