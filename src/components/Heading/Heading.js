import { useContext } from "react";
import { AccentContext } from "../../App";

function Heading({ name, title }) {
  const accent = useContext(AccentContext);
  return (
    <div id={name} className="mb-2 display-f align-center">
      <div className={`heading-bullet-${accent} mr-1`}></div>
      <h1 className="text-primary-light-9 font-xl fontfam-cont">{title}</h1>
    </div>
  );
}

export default Heading;
