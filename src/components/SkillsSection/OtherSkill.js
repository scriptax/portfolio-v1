import { useContext } from "react";
import { AccentContext } from "../../App";
import personData from "./../../data/personData.json";

const Elem = ({ skill }) => {
  const accent = useContext(AccentContext);
  return (
    <>
      <li
        className={`list-bullet list-bullet-${accent} mt-1 font-md fontfam-temp`}
      >
        {skill}
      </li>
    </>
  );
};

function OtherSkills() {
  return (
    <>
      <h1 className="ml-1 display-i-b">🛠 Tools & Knowledge</h1>
      <ul className="mt-3">
        {personData.otherSkills.map((skill, index) => (
          <Elem key={index} skill={skill} />
        ))}
      </ul>
    </>
  );
}

export default OtherSkills;
