import React from "react";
import Create from "../components/Create";

function LandingPage() {
  return (
    <div className=" flex flex-col gap-y-[1px] w-[550px] justify-center">
      <div className="my-4">
        <Create />
      </div>
      <div className=" gap-y-2 pt-4 border-t-[1px] border-black border-opacity-20 w-full">
        <div className=" text-darkblue items-center flex flex-col justify-center">
          <div className="bg-white text-darkblue w-full p-4 shadow mb-4 gap-y-4 rounded-xl items-center flex flex-col border-[1px] border-black border-opacity-40">
            <div className="flex flex-row mr-[330px]">
              <div className="flex justify-center items-center w-[40px] h-[40px] ml-2 overflow-hidden rounded-full bg-white">
                <img
                  src="/user.jpg"
                  alt="Profile"
                  className="w-[90px] h-[90px] object-cover flex justify-center items-center"
                />
              </div>
              <div className="flex flex-col">
                <p className="ml-2 text-xl">Sagar Sharma</p>
                <p className="ml-2 text-sm">Student</p>
              </div>
            </div>
            <p className="ml-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              aspernatur nihil magni quidem iste dolor et porro laudantium hic.
            </p>
            <img
              src="\logo512.png"
              alt="Post"
              className="w-96 h-64 object-cover rounded mb-4 bg-bgcolor "
            />
            <div className=""></div>
          </div>
        </div>
        <div className=" text-darkblue items-center flex flex-col justify-center">
          <div className="bg-white text-darkblue w-full p-4 shadow mb-4 rounded-xl items-center flex flex-col border-[1px] border-black border-opacity-40">
            <img
              src="\logo512.png"
              alt="Post"
              className="w-96 h-64 object-cover rounded mb-4 bg-bgcolor"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              ipsam, minima aperiam, cumque inventore repudiandae libero cum
              explicabo quis quos enim?
            </p>
          </div>
        </div>
        <div className=" text-darkblue items-center flex flex-col justify-center">
          <div className="bg-white text-darkblue w-full p-4 shadow mb-4 rounded-xl items-center flex flex-col border-[1px] border-black border-opacity-40">
            <img
              src="\logo512.png"
              alt="Post"
              className="w-64 h-64 object-cover rounded mb-4 bg-bgcolor "
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              eligendi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
