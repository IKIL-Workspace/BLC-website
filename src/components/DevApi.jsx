import React from "react";

import codeImage from "../assets/code.jpg";
import Subtitle from "./Subtitle";

const DevApi = () => {
  return (
    <Subtitle
      name="developer API"
      title="About BLC"
      subtitle={`Experience the blockchain of the future with the new-generation cryptocoin solution, which seeks to give an abundance of unique economically sound pathways to our potential holders.
      `}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}

        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="">
            Whom madam songs faster get as followed sought many leave.
          </p>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
        
      </div>
    </Subtitle>
  );
};

export default DevApi;
