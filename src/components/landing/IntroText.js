import React from "react";

const IntroText = ({ personInfo: { name, role, location } }) => {
  return (
    <div className="intro-text">
      <p className="text-regular">Hi, My name is</p>
      <p className="personName">{name}</p>
      <p className="text-regular">
        {role} in {location}
      </p>
      <a className="buttonlink" href="#About">
        More About Me {">>"}
      </a>
    </div>
  );
};

export default IntroText;
