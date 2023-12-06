import React from "react";

// ! import all book Image
import bookImage1 from "../assets/BookCard1.png";
import bookImage2 from "../assets/BookCard2.png";
import bookImage3 from "../assets/BookCard3.png";
import bookImage4 from "../assets/BookCard4.png";
import bookImage5 from "../assets/BookCard5.png";

const Book = () => {
  const booksCard = [
    {
      image: bookImage1,
      id: 1,
      title: "Choose Destination",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      image: bookImage2,
      id: 2,
      title: "Make Payment",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      image: bookImage3,
      id: 3,
      title: "Reach Airport on Selected Date",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen mx-auto bg-gray-100/60 min-h-[50%]">
      <div className="text-center flex flex-col gap-2 mb-5">
        <h1 className="text-4xl text-black font-semibold mb-2">
          Book Your Next Trip in 3 Easy Steps
        </h1>
        <p>Easy and Fast</p>
      </div>

      <div className="mt-14 grid lg:flex justify-between md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        <div className="flex flex-col gap-20">
          {booksCard.map((card) => (
            <div key={card.id} className="flex items-center gap-4">
              <img src={card.image} alt="bookImage1" />

              <div className="flex flex-col mb-2 gap-2">
                <h2 className="font-bold text-xl text-[#5E6282] ">
                  {card.title}
                </h2>
                <p className="text-sm text-black">{card.dec}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative ">
          <img src={bookImage4} alt="bookImage2" className="h-full w-full" />
          <div className="absolute lg:bottom-[50px] right-[-100px] mx-auto bottom-[-20px]">
            <img
              src={bookImage5}
              alt="bookImage3"
              className="h-full w-full mr-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
