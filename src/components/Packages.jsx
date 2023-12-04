import React from "react";
import Button from "../layout/Button";
import { MdOutlineLocationOn } from "react-icons/md";

// ! import packages Images

import packageImage1 from "../assets/packagesCard1.jpg";
import packageImage2 from "../assets/packagesCard2.jpg";
import packageImage3 from "../assets/packagesCard4.jpg";

const Packages = () => {
  const packages = [
    {
      id: 1,
      Image: packageImage1,
      title: "3 Days, 2 Night",
      price: "$500 / Person",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
      icon: <MdOutlineLocationOn size={20} color="green" />,
      location: "Indonesia",
      button: "Know more",
    },
    {
      id: 2,
      Image: packageImage2,
      title: "3 Days, 2 Night",
      price: "$800 / Person",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
      icon: <MdOutlineLocationOn size={20} color="green" />,
      location: "Japan",
      button: "Know more",
    },
    {
      id: 3,
      Image: packageImage3,
      title: "3 Days, 2 Night",
      price: "$500 / Person",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
      icon: <MdOutlineLocationOn size={20} color="green" />,
      location: "Mountains",
      button: "Know more",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen mx-auto bg-[#005853]/5 min-h-screen">
      <div className="text-center my-8">
        <h2 className="text-4xl text-black font-semibold mb-2">
          Best Packages For You
        </h2>
      </div>
      {/* Select button */}
      <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
        <Button title="Hot Deals" />
        <Button title="Backpack" />
        <Button title="South Asia" />
        <Button title="Honeymoon" />
        <Button title="Europe" />
        <Button title="More" />
      </div>
      {/* Pack cards */}

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 py-12 ">
        {packages.map((packageCard) => (
          <div
            key={packageCard.id}
            className="px-4 py-10 text-center md:w-[300px] mx-auto md:h-600 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-primaryDark transition-all duration-300 flex flex-col items-center justify-center h-full"
          >
            <div>
              <img
                src={packageCard.Image}
                alt="Package"
                className="rounded-xl h-[250px]"
              />
            </div>
            <div className="w-auto flex flex-wrap justify-between items-center my-5 gap-4 ">
              <h1 className="text-xl font-bold font-sans text-black">
                {packageCard.title}
              </h1>
              <h2 className="font-semibold text-sm">{packageCard.price}</h2>
            </div>

            <div>
              <p className="md:w-3/4 text-sm text-black mb-8 mx-auto">
                {packageCard.description}
              </p>
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                {packageCard.icon}
                <p className="font-semibold text-lg">{packageCard.location}</p>
              </div>
              <p className="font-semibold">{packageCard.button}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-fill flex justify-center mt-10">
        <Button title="Discover more" />
      </div>
    </div>
  );
};

export default Packages;
