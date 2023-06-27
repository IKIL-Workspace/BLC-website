import React, { useRef, useState } from "react";

import heroVideo from "../assets/hero.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import style from "../assets/style.css"
import logo from "../assets/logo.png"
import Partners from "./Partners";



const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <>
    <div className="flex items-center justify-center w-full h-screen text-center">
    <video
      ref={videoRef}
      src={heroVideo}
      autoPlay
      loop
      muted
      className="object-cover h-full w-full absolute -z-10"
    />
  
    <div
      className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
        isVideoPlaying ? "bg-black/80" : "bg-black/80"
      } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
    >
      <div className="main-h1">
        <center><img src={logo} className="logo-img" alt="Logo" /></center>
        <h1>Billion Local Coin</h1>
      </div>
      <div className="main-desc">Discover How BLC Coin's Blockchain Technology is Revolutionizing Gold and Mineral Resource Trading</div>
  
      {/* <h1 className="text-5xl lg:text-7xl capitalize mb-12">
        the the <span className="text-thBlue font-bold">future</span> is here
      </h1> */}


      <div className="flex flex-row justify-center items-center">
        <button className="capitalize main-buttons" title="get BLC Coin" >Get BLC Coin</button>
      </div>
      </div>
</div>
  
  <Partners />
  </>
  );
};

export default HeroSection;
