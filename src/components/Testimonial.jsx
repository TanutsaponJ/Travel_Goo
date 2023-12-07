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

        <div className="relative w-full h-full mx-auto">
          <div className="mx-auto w-full sm:w-10/12">
            <img
              src={testimonialImage}
              alt="Testimonial"
              className="rounded-[2rem]"
            />

            <div className="w-full sm:w-1/2 absolute bottom-10 right-0 mx-auto text-center bg-slate-50 opacity-90 h-[300px] sm:right-[160px] lg:right-[320px] lg:h-[200px] rounded-xl">
              <div className="items-center flex justify-center relative">
                <img
                  src={profile}
                  alt="ProfilePicture"
                  className="absolute bottom-[-5]"
                />
              </div>
              <div className="flex flex-col flex-wrap justify-center gap-4 mt-20 p-6">
                <p className="text-black font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis,
                </p>
                <h2 className="text-black font-bold">-Jeo Stanlee</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
