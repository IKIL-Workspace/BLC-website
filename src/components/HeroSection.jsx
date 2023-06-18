import React, { useRef, useState } from "react";

import heroVideo from "../assets/hero.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import style from "../assets/style.css"
import logo from "../assets/logo.png"
import copysvg from "../assets/copy-img.svg"
import bscscan from "../assets/BscScan-m-logo-1.png";
import dexview from "../assets/Dexview-m-logo-2.png";
import coinmarketcap from "../assets/Coinmarketcap-m-logo-3.png";
import pinksale from "../assets/Pinksale-m-logo-4.png";
import Subtitle from "./Subtitle";



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


      <div className="flex flex-row justify-center items-center">
        <button className="capitalize main-buttons" title="get BLC Coin" >Get BLC Coin</button>
      </div>

      <Subtitle
    name="partners"
    title="BLC Partners & Support"
  >
    <center>
        <div className="container partners media-logo mt80px aos-init aos-animate" data-aos="fade-up">
      <div className="partners__block hvr-pop">
        <a href="https://bscscan.com/token/0x705a2ba14923bca7f31ee694c49ac9cb5c292a48" target="_blank">
          <img src={bscscan} 
          alt="BscScan logo" 
          className="partners__img" />
        </a>
      </div>
      <div className="partners__block hvr-pop">
        <a href="https://www.dexview.com/" target="_blank">
          <img src={dexview}
          alt="Dexview logo" 
          className="partners__img" />
        </a>
      </div>
      <div className="partners__block hvr-pop">
        <a href="https://coinmarketcap.com/" target="_blank">
          <img src={coinmarketcap}
           alt="Coinmarketcap logo" 
           className="partners__img" />
        </a>
      </div>
      <div className="partners__block hvr-pop">
        <a href="https://www.pinksale.finance/" target="_blank">
          <img src={pinksale}
          alt="Pinksale logo" 
          className="partners__img" />
        </a>
      </div>
    </div>
    </center>
    </Subtitle>
    </div>
  </div>

  
  
  );
};

export default HeroSection;
