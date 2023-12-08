import React from "react";
import bgVideo from "../assets/video1.mp4";
import Button from "../layout/Button";
import Arrow from "../assets/subPicture.png";
import Star from "../assets/subPicture1.png";

// ! import react icon

import { MdOutlineEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="w-full h-2/4 relative">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      />
      {/* Overlay */}
      {/* <div className="absolute w-full h-full top-0 left-0 bg-[#005853]/20"></div> */}
      <div className="absolute top-0 w-full h-full flex justify-center items-center p-4 text-center">
        <div className="relative bg-[#32DF8F]/20 w-full sm:w-2/3 h-[300px] flex flex-col p-4 gap-5 rounded-tl-xl ">
          <img
            src={Arrow}
            alt="Arrow"
            className="absolute w-[50px] top-[-12px] right-[-12px] "
          />
          <img
            src={Star}
            alt="starPicture"
            className="absolute w-[100px] bottom-[-15px] right-[-15px] "
          />
          <div>
            <h1 className="text-4xl font-bold mb-2 py-4">
              Subscribe to get information,
            </h1>
            <h2 className="text-lg ">
              latest news and other interesting offers about Cobham
            </h2>
          </div>

          <form className="flex flex-col justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md bg-gray-100/90">
            <div className="w-full flex gap-2 items-center mb-4">
              <MdOutlineEmail size={20} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="bg-transparent w-full sm:w-[300px] md:w-[400px] font-[Poppins] focus:outline-none"
              />
              <div>
                <Button title="Subscribe" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
