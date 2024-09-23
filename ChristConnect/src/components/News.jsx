import React from "react";

function News() {
  return (
    <div className="flex flex-col lg:flex-row w-1/4 pt-[17px] px-[20px] ">
      <div className="w-[600px] p-4 h-[80vh] bg-blue-300 rounded-xl drop-shadow bg-blue border-[1px] border-black border-opacity-20">
        <h2 className="text-2xl text-white font-bold mb-4 underline font-serif">
          News
        </h2>
        <div className="bg-white text-darkblue rounded p-4 shadow mb-4 ">
          <p>News content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default News;
