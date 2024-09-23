import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex flex-row justify-center items-center text-white  border-b-[1px] border-black bg-darkblue">
      <div className="flex flex-row justify-center items-center gap-x-[780px]">
        <nav className="container  flex  items-center">
          <div className="flex items-center">
            <img
              src="\finalchristlogo.png"
              alt=""
              className="h-[110px] w-60 cursor-pointer"
            />
          </div>
        </nav>
        <div className="">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
