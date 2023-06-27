import React from "react";
import GradientBtn from "./GradientBtn";
import style from "../assets/style.css"
import logo from "../assets/logo.png"

import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const Navigation = ({ isMenuShown, setIsMenuShown }) => {
  const links = [{
      id: 1,
      link: "home",
      route:"/",
    },
    {
      id: 2,
      link: "about",
      route: "/about",
    },
    {
      id: 3,
      link: "features",
      route: "/features",
    },
    {
      id: 4,
      link: "contact",
      route: "/contact",
    },
    {
      id: 5,
      link: "faq",
      route: "/faq",
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-gray text-red z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">

          <div className="logo-top">
            <h1 className="tracking-widest logo-text"><img src={logo} alt="" className="d-inline-block align-text-top brand-img"/> BLC</h1>
          </div>

          <div className="hidden lg:flex items-center nav-top ">
            <ul className="flex">
              {links.map(({ id, link, route}) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                  <Link to={route}>
                    {link}
                  </Link>
                </li>
              ))}

              <li
                className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
              >
                <a href="https://docs.billionlocalcoin.net/" target="_blank">Learn</a>
              </li>
            </ul>
            <GradientBtn className="ml-4 capitalize" title="get coin" />
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
        className={`w-full bg-black text-red absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link, route }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(false)}
                to={route}
              >
                {link}
              </Link>
            </li>
          ))}
          <GradientBtn className="mt-10 capitalize" title="get BLC" />
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;