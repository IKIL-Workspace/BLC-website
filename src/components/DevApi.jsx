import React from "react";

import codeImage from "../assets/logo.png";
import Subtitle from "./Subtitle";

const DevApi = () => {
  return (
    <Subtitle
      name="developer API"
      title="About BLC"
      subtitle={`BLC is a new cryptocurrency project, that aims to provide stability and long-term growth for potiential holders. The main focus of the project is to develop a credible solution that avoids the displacement of families from there homes. This project has specifically being created to assist the holders of the BLC where ever they are globally.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-black-900 rounded-lg">
          <h1> BLC Vision </h1>
          <p className="">
          BLC is a new cryptocurrency project, that aims to provide stability and long-term growth for potiential holders.</p>
          <p>The main focus of the project is to develop a credible solution that avoids the displacement of families from there homes. </p>
           <br/>
           <h1> BLC Mission </h1>
          <p className="">
          BLC is a new cryptocurrency project, that aims to provide stability and long-term growth for potiential holders.</p>
          <p>The main focus of the project is to develop a credible solution that avoids the displacement of families from there homes. </p>
           
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg"
          />
        </div>
        
      </div>
    </Subtitle>
  );
};

export default DevApi;
