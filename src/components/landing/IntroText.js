import React from "react";
import personData from "./../../data/personData.json";

const IntroText = () => {
  return (
    <div className="intro-text">
      <p className="text-regular">Hi, My name is</p>
      <p className="personName">{personData.name}</p>
      <p className="text-regular">
        {personData.role} in {personData.location}
      </p>
      <a className="buttonlink" href="#About">
        More About Me {">>"}
      </a>
    </div>
  );
};

export default IntroText;
