import React from "react";
import GradientBtn from "./GradientBtn";
import style from "../assets/style.css"
import logo from "../assets/logo.png"

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Tokenomics",
    },
    {
      id: 4,
      link: "Features",
    },
    {
      id: 5,
      link: "Roadmap",
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">

          <div className="logo-top">
            <h1 className="tracking-widest logo-text"><img src={logo} alt="" className="d-inline-block align-text-top brand-img"/> BLC</h1>
          </div>

          <div className="hidden lg:flex items-center nav-top ">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <GradientBtn className="ml-4 capitalize" title="get anton" />
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <GradientBtn className="mt-10 capitalize" title="get BLC" />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
