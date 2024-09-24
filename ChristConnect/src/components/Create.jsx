import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

const Create = ({ addPost, username }) => {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim() && !selectedFile) return;

    // Use FormData to handle both text and file uploads
    const formData = new FormData();
    formData.append("user_id", username); // Add logged-in username
    formData.append("user_designation", "Student"); // Add role
    formData.append("post_text", content); // Add post text

    // If there's an image selected, add it to the FormData
    if (selectedFile) {
      formData.append("post_image", selectedFile);
    }

    // POST request to Django API
    fetch("http://127.0.0.1:8000/post/", {
      method: "POST",
      body: formData, // Send FormData object
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json(); // Parse JSON if response is OK
      })
      .then((data) => {
        console.log("Post created:", data);
        addPost(data); // Add the new post to the list
        setContent(""); // Clear form
        setSelectedFile(null); // Clear file input
      })
      .catch((error) => console.error("Error posting data:", error));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="w-full flex justify-center h-[170px]">
      <div className="flex flex-row bg-white rounded-2xl items-center gap-x-4 border-[1px] border-black border-opacity-50 w-full">
        <div className="flex ml-4 mb-8">
          <FaUserCircle className="text-5xl text-black" />
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
              <label className="bg-bgcolor text-black px-2 h-8 rounded-lg flex flex-row justify-center items-center gap-x-[1px] cursor-pointer">
                <CiImageOn className="text-2xl" />
                <p className="mt-[1px]">Add Media</p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
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
