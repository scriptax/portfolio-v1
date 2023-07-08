import { useContext } from "react";
import { AccentContext } from "../../App";

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

function OtherSkills({ skills }) {
  return (
    <>
      <h1 className="ml-1 display-i-b">🛠 Tools & Knowledge</h1>
      <ul className="mt-3">
        {skills.map((skill, index) => (
          <Elem key={index} skill={skill} />
        ))}
      </ul>
    </>
  );
}

export default OtherSkills;
