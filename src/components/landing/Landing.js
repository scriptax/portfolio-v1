import { useContext } from "react";
import { AccentContext } from "../../App";
import personImg from "../../assets/images/user.jpg";

const Landing = ({ content }) => {
  const accent = useContext(AccentContext);
  return (
    <header className={`mt-4 p-2 bg-${accent} sectionborder`}>
      <div className="row justify-center align-center gap-2">
        <div className="col-11-xs col-5-md p-2 text-primary">
          <p className="fontfam-temp font-md">Hi, My name is</p>
          <h1 className="font-name mt-1">{content.name}</h1>
          <p className="font-lg mt-1">
            {content.role} in {content.location}
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
