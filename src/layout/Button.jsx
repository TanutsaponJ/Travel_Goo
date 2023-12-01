import React from "react";

export default function Button(props) {
  return (
    <div>
      <button className="border w-full bg-primaryDark rounded-md text-white px-4 py-2 my-2 hover:bg-primaryLight transition duration-300 ease-in-out ">
        {props.title}
      </button>
    </div>
  );
}
