import React from "react";

import codeImage from "../assets/code.jpg";
import Subtitle from "./Subtitle";

const DevApi = () => {
  return (
    <Subtitle
    name="partners"
    title="BLC Partners & Support"
  >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}
          <p>
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

    </Subtitle>
  );
};

export default DevApi;
