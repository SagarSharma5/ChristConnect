import React from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="p-2 border w-[270px] text-black border-gray-300 rounded-lg focus:outline-none"
        placeholder="Search..."
      />
      <button className="ml-2 p-2 bg-blue text-white text-2xl rounded-lg">
        <IoMdSearch />
      </button>
    </div>
  );
}

export default SearchBar;
