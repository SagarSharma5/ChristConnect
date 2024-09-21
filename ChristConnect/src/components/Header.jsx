import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="text-white  border-b-[1px] border-black bg-darkblue">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ml-36">
          <img
            src="\finalchristlogo.png"
            alt=""
            className="h-[110px] w-60 cursor-pointer"
          />
        </div>
        <div className="mr-36">
          <SearchBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
