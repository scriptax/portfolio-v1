import { AccentContext } from "../../App";
import { useContext } from "react";
import email from "./../../assets/icons/email.svg";
import x from "./../../assets/icons/x.svg";
import linkedin from "./../../assets/icons/linkedin.svg";
import codepen from "./../../assets/icons/codepen.svg";
import github from "./../../assets/icons/github.svg";
import upIcon from "./../../assets/icons/up.svg";

const icons = {
  email: email,
  x: x,
  linkedin: linkedin,
  codepen: codepen,
  github: github,
};

function Footer({ content }) {
  const accent = useContext(AccentContext);
  return (
    <footer
      className={`bg-${accent} footerborder pt-3 pb-3 textal-c fontfam-cont`}
    >
      <a
        className="link link-black font-md mb-1"
        href="mailto:moradi.online@outlook.com"
      >
        moradi.online@outlook.com
      </a>
      <br />
      {content.socialLinks.map(([name, link], index) => (
        <a
          className="social-icons mr-1 ml-1"
          key={index}
          href={link}
          title={name}
          target="blank"
        >
          <img height="30px" src={icons[name]} alt={name} />
        </a>
      ))}
      <a className="back-to-top display-b mt-2" href="/#">
        <img height="30px" src={upIcon} alt="up" />
        <p className="fontwt-600">Back To Top</p>
      </a>
      <p className="mt-2">© {new Date().getFullYear()} Majid Moradi</p>
    </footer>
  );
}

export default Footer;
