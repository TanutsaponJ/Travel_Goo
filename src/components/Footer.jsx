import React from "react";
import googlePlay from "../assets/Google Play.png";
import playStore from "../assets/Play Store.png";

// ! import social media icons
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// ! import social media Link

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="relative mx-auto">
      <div className="absolute top-0 left-0 w-full  overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="absolute block fill-[#32DF8F] opacity-20"
          ></path>
        </svg>
        <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2 p-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl list-none">Travel Goo.</h1>
            <p className="my-10">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[22px] list-none font-semibold py-2 uppercase">
              Company
            </h1>
            <ul>
              <li className="my-4 list-none">About</li>
              <li className="my-4 list-none">Careers</li>
              <li className="my-4 list-none">Mobile</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[22px] list-none font-semibold py-2 uppercase">
              Contact
            </h1>
            <ul>
              <li className="my-4 list-none">Help/FAQ</li>
              <li className="my-4 list-none">Press</li>
              <li className="my-4 list-none">Afflicts</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[22px] list-none font-semibold py-2 uppercase">
              More
            </h1>
            <ul>
              <li className="my-4 list-none">Airlinefees</li>
              <li className="my-4 list-none">Airline</li>
              <li className="my-4 list-none">Low fare tips</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex gap-10">
              <FaFacebook size={25} />
              <FaSquareXTwitter size={25} />
              <FaInstagram size={25} />
            </div>
            <h2>Discover our app</h2>
            <div className="flex gap-3">
              <img src={googlePlay} alt="googlePlay" />
              <img src={playStore} alt="playStore" />
            </div>
          </div>

          {/* Social media link */}
        </div>
        <div className="flex space-x-4 justify-center items-center mb-5">
          <a
            href="/"
            className="hover:text-primaryDark transform hover:scale-200 transition-all duration-200  ease-in-out "
          >
            <FaGithub />
          </a>
          <a
            href="/"
            className="hover:text-primaryDark transform hover:scale-100 transition-all duration-200 ease-in-out "
          >
            <FaLinkedinIn />
          </a>
          <a
            href="/"
            className="hover:text-primaryDark  transform hover:scale-100 transition-all duration-200 ease-in-out "
          >
            <FaTwitter />
          </a>
          <a
            href="/"
            className="hover:text-primaryDark transform hover:scale-100 transition-all duration-200 ease-in-out "
          >
            <FaInstagram />
          </a>
          <div>
            <p>
              Copyright{" "}
              <a
                href="https://github.com/TanutsaponJ"
                className="text-lg text-primaryDark"
              >
                Tanutsapon Jinaongkan
              </a>{" "}
              {Year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
