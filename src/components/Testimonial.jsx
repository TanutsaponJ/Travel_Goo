import React from "react";
import testimonialImage from "../assets/testimonial.png";
import profile from "../assets/Ellipse 30.png";

const Testimonial = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen mx-auto bg-[#005853]/5 min-h-[50vh]">
      <div>
        <div className="text-center mb-20">
          <h1>What People Say About Us</h1>
        </div>

        <div className="relative">
          <div className="mx-auto w-10/12">
            <img src={testimonialImage} alt="pic1" className="rounded-[2rem]" />
          </div>

          <div className="lg:w-1/2 absolute mx-auto bottom-9 text-center bg-slate-50 opacity-90 h-[200px] right-[370px] rounded-xl ">
            <div className="items-center flex justify-center relative lg:items-center ">
              <img
                src={profile}
                alt="profileImage1"
                className="absolute bottom-[-5]"
              />
            </div>
            <div className="flex flex-col flex-wrap justify-center gap-4 mt-20 p-6 ">
              <p className="text-black font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <h2 className="text-back font-bold">-Jeo Stanlee</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
