import React, { useRef, useState } from "react";

import heroVideo from "../assets/hero.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import style from "../assets/style.css"
import logo from "../assets/logo.png"
import copysvg from "../assets/copy-img.svg"



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

<div className="block-desc cont-address">
  <p>
    Contract Address:<br />
    <span>
      <a href="https://bscscan.com/token/0x705a2ba14923bca7f31ee694c49ac9cb5c292a48" target="_blank">0x705a2ba14923bca7f31ee6...</a>
    </span>
    <textarea
      id="myInput"
      style={{ width: '5%', left: 0, height: '5px', position: 'absolute', top: 0, opacity: 0 }}
    >
      0x705a2ba14923bca7f31ee694c49ac9cb5c292a48
    </textarea>
    <button onClick={myFunction}>
      <img className="copyIcon" src={copysvg} alt="Copy icon" />
    </button>
  </p>
</div>

      <div className="flex flex-row justify-center items-center">
        <GradientBtn className="capitalize" title="get BLC Coin" />
  
        {isVideoPlaying ? (
          <FaPauseCircle
            size={30}
            onClick={handleVideoPause}
            className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
          />
        ) : (
          <FaPlayCircle
            size={30}
            onClick={handleVideoPlay}
            className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
          />
        )}
      </div>
    </div>
  </div>
  
  );
};

export default HeroSection;
