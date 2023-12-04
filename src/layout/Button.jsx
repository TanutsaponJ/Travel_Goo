import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default function Button(props) {
  return (
    <div>
      <button className="border-none w-[12rem] bg-primaryDark font-semibold rounded-md text-white px-4 py-2 my-2 hover:bg-primaryLight transition duration-300 ease-in-out ">
        {props.title}
        <IoArrowForward
          className="inline-block items-center ms-0.5"
          size={15}
        />
      </button>
    </div>
  );
}
