import { useContext } from "react";
import { AccentContext } from "../../App";
import personImg from "../../assets/images/user.png";
import personData from "./../../data/personData.json";

const Landing = () => {
  const accent = useContext(AccentContext);
  return (
    <header className={`mt-4 p-2 bg-${accent} sectionborder`}>
      <div className="row justify-center align-center gap-2">
        <div className="col-11-xs col-5-md p-2 text-primary">
          <p className="fontfam-temp font-md">Hi👋, My name is</p>
          <h1 className="font-name fontfam-cont mt-1">{personData.name}</h1>
          <p className="font-lg fontfam-cont mt-1">
            {personData.role} in {personData.location}
          </p>
          <a
            className="link link-primary fontfam-temp font-md mt-1"
            href="#About"
          >
            More About Me {">>"}
          </a>
        </div>
        <div className="col-11-xs col-6-md col-4-lg">
          <img
            className="photoframe"
            draggable="false"
            src={personImg}
            alt="Majid Moradi"
          />
        </div>
      </div>
    </header>
  );
};

export default Landing;
