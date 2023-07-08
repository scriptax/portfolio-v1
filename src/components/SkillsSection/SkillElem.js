import { useContext } from "react";
import { AccentContext } from "../../App";

const Elem = ({ skill }) => {
  const accent = useContext(AccentContext);
  return (
    <div className="col-6-xs col-4-md">
      <div className={`skillcard bg-${accent}`}>
        <div className="bg-primary">
          <img src={skill.src} alt={skill.name} draggable="false" />
          <p className="font-md fontfam-temp">{skill.name}</p>
        </div>
      </div>
    </div>
  );
};

function SkillElem({ skills }) {
  return (
    <>
      <h1 className="mb-2 ml-1 display-i-b">{"</>"} Development Skills</h1>
      <div className="row justify-c textal-c gap-1">
        {skills.map((skill) => (
          <Elem key={skill.name} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default SkillElem;
