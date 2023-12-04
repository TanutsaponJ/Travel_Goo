import React from "react";
import worldImage2 from "../assets/world_map_2.png";
import DestinationCards from "../layout/DestinationCards";

// ! import Destination Image

import Destination1 from "../assets/Thailandsm.png";
import Destination2 from "../assets/smpic.png";
import Destination3 from "../assets/smpicture3.png";
import Destination4 from "../assets/JapanSm.png";
import Destination5 from "../assets/ItalySm.png";
import Destination6 from "../assets/SwitzerLandSm.png";

const Destination = () => {
  const images = [
    {
      imageUrl: Destination1,
      title: "Thailand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      imageUrl: Destination2,
      title: "Indonesia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      imageUrl: Destination3,
      title: "new Zealand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      imageUrl: Destination4,
      title: "Japan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      imageUrl: Destination5,
      title: "Manarola, SP, Italy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      imageUrl: Destination6,
      title: "Seealpsee, District, Switzerland",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative gap-20">
      <img
        src={worldImage2}
        alt=""
        className="absolute w-full h-full opacity-50"
      />
      <div className="md:w-1/2  top-0 flex flex-col items-center mt-8">
        <h2 className="text-4xl text-black  font-semibold mb-7 md:w-2/3 text-center ">
          Our Popular Destination
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 ">
        {images.map((image, index) => (
          <DestinationCards
            key={index}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Destination;
