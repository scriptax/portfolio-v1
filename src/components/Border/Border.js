import { useContext } from "react";
import { AccentContext } from "../../App";

function Border() {
  const accent = useContext(AccentContext);
  return (
    <div className={`seperator-border-${accent}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Border;
