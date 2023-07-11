import { useState, useEffect, useContext } from "react";
import { AccentContext } from "../../App";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import AccentMenu from "./AccentMenu";
import Logo from "./Logo";

const Navlink = ({ text, sidebarClose }) => {
  const accent = useContext(AccentContext);
  return (
    <li className="mr-1">
      <a
        className={`link link-${accent} fontfam-cont pl-1 pr-1`}
        href={"#" + text}
        onClick={sidebarClose}
      >
        {text}
      </a>
    </li>
  );
};

function Navbar({ accentPicker }) {
  const [sidebar, setSidebar] = useState(false);
  const accent = useContext(AccentContext);

  useEffect(() => {
    window.addEventListener("resize", screenHandler);
  }, []);
  useEffect(() => {}, []);
  const sidebarHandler = () => {
    if (window.innerWidth < 960) {
      setSidebar((sidebar) => !sidebar);
      document.body.style.overflowY = !sidebar ? "hidden" : "auto";
    }
  };
  const screenHandler = () => {
    setSidebar(window.innerWidth < 960 && false);
    document.body.style.overflowY = window.innerWidth > 960 && "auto";
  };

  const links = ["About", "Skills", "Work", "Contact"];
  const linksFormatetd = links.map((link) => (
    <Navlink text={link} sidebarClose={sidebarHandler} key={link} />
  ));

  return (
    <>
      <nav className="navbar-primary justify-between text-white pt-1 pb-1">
        <div className="container">
          <div className="row align-center">
            <h1 className="site-title mr-1 display-i-b">
              <a href="# " className="fontfam-temp">
                <Logo />
              </a>
            </h1>
            <AccentMenu accentPicker={accentPicker} />
          </div>
          <ul className="display-f font-md">
            {linksFormatetd}
            <button
              className={`btn btn-outlined-${accent} font-md ml-1 fontfam-cont`}
            >
              Resume
            </button>
          </ul>
        </div>
        <MenuIcon handler={sidebar} sidebarHandler={sidebarHandler} />
      </nav>
      <Sidebar handler={sidebar} sidebarClose={sidebarHandler}>
        {linksFormatetd}
      </Sidebar>
    </>
  );
}

export default Navbar;
