import React from "react";
import img from "../assets/Hero.png";
import Button from "../layout/Button";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src={img}
        alt="heroImage"
        className="w-full h-full object-cover block"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black/50"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="font-OpenSens flex flex-col text-4xl font-extrabold">
          Your Imagination Is <span className="mt-3">Your Only Limit</span>
        </h1>
        <h2 className="mt-4">
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority
        </h2>
        <div className="w-fill flex justify-center">
          <Button title="Discover more" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
