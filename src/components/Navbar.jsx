import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button";

// ! import All icons
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [logo, setLogo] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleOpenMenu = () => {
    setOpenNav(!openNav);
    setLogo(!logo);
  };

  const handleCloseMenu = () => {
    setOpenNav(false);
  };

  return (
    <div className="flex  w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <Link to="hero" spy={true} smooth={true} duration={500}>
          <h1 className="flex flex-col items-center ">
            Travel <span>Goo.</span>
          </h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        <Link to="hero" spy={true} smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="services" spy={true} smooth={true} duration={500}>
          <li>About Us</li>
        </Link>
        <Link to="package" spy={true} smooth={true} duration={500}>
          <li>Packages</li>
        </Link>
      </ul>
      <div className="hidden md:flex">
        <IoMdStarOutline className="mr-3 text-[#FF7A00]" size={20} />
        <FaRegUserCircle size={20} />
      </div>

      {/* Hamburger Menu */}

      <div onClick={handleOpenMenu} className="md:hidden z-10">
        {openNav ? (
          <MdClose className="text-black" size={25} />
        ) : (
          <MdMenuOpen size={25} />
        )}
      </div>

      {/*! Mobile Menu dropdown */}

      <div
        className={
          openNav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100 px-4 py-7 flex flex-col"
            : "absolute left-[-100%] top-0 w-full bg-gray-100 px-4 py-7 flex flex-col"
        }
      >
        <ul>
          <h1>Travel Goo.</h1>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <li onClick={handleCloseMenu} className="border-b cursor-pointer ">
              Home
            </li>
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <li onClick={handleCloseMenu} className="border-b cursor-pointer ">
              About Us
            </li>
          </Link>
          <Link to="package" spy={true} smooth={true} duration={500}>
            <li onClick={handleCloseMenu} className="border-b cursor-pointer ">
              Packages
            </li>
          </Link>
          <div className="flex flex-col">
            <Button onClick={handleCloseMenu} title="Search" />
            <Button onClick={handleCloseMenu} title="Account" />
          </div>
          <div className="flex justify-between my-5">
            <FaFacebook onClick={handleCloseMenu} className="icon" size={20} />
            <FaTwitter onClick={handleCloseMenu} className="icon" size={20} />
            <FaInstagram onClick={handleCloseMenu} className="icon" size={20} />
            <FaPinterest onClick={handleCloseMenu} className="icon" size={20} />
            <FaYoutube onClick={handleCloseMenu} className="icon" size={20} />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
