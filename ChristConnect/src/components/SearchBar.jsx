import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const pageList = [
  { name: "Home", path: "/" },
  { name: "Discussion Forum", path: "/discussionforum" },
  { name: "Events", path: "/events" },
  { name: "Campus Map Location", path: "/campusmaplocation" },
  { name: "Roommate Listing", path: "/roommatelisting" },
  { name: "Login/Signup", path: "/loginsignup" },
];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions based on user input
    if (value.length > 0) {
      const filteredSuggestions = pageList.filter((page) =>
        page.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (pagePath) => {
    // Navigate to the selected page
    navigate(pagePath);
    setQuery(""); // Clear the query after search
    setSuggestions([]); // Clear suggestions
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedPage = pageList.find((page) =>
      page.name.toLowerCase().includes(query.toLowerCase())
    );
    if (matchedPage) {
      handleSearch(matchedPage.path);
    }
  };

  return (
    <div className="relative flex items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="p-2 border w-[270px] text-black border-gray-300 rounded-lg focus:outline-none"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue text-white text-2xl rounded-lg"
        >
          <IoMdSearch />
        </button>
      </form>

      {/* Suggestions List */}
      {suggestions.length > 0 && (
        <ul className="absolute top-[45px] w-full bg-white text-darkblue shadow-lg rounded-lg">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.path}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSearch(suggestion.path)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
