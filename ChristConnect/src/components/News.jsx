import React from "react";

function News() {
  return (
    <div className="flex flex-col lg:flex-row w-1/4 pt-[17px] px-[20px] ">
      <div className="w-[600px] p-4 h-[80vh] bg-blue-300 rounded-xl drop-shadow bg-blue border-[1px] border-black border-opacity-20">
        <h2 className="text-2xl text-white font-bold mb-4 underline font-serif">
          News
        </h2>
        <div className="bg-white text-darkblue rounded p-4 shadow mb-4 ">
          <img
            src="/news1.jpg"
            alt="Event"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <p className="text-darkblue text-sm pl-1">
            Ethnic Day will be celebrated on the 14th of September, inviting
            everyone to embrace and showcase their cultural heritage through
            traditional attire. This vibrant event aims to promote unity in
            diversity, highlighting the rich cultural traditions of various
            communities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
