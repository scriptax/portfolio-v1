import { useContext } from "react";
import { AccentContext } from "../../App";
import personData from "./../../data/person-data.json";
import * as icons from "./../../utils/icons";

const Elem = ({ skill }) => {
  const accent = useContext(AccentContext);
  const picKey = skill.toLowerCase();
  return (
    <div className="col-6-xs col-4-md">
      <div className={`skillcard bg-${accent}`}>
        <div className="bg-primary">
          <img src={icons[picKey]} alt={skill} draggable="false" />
          <p className="font-md fontfam-temp">{skill}</p>
        </div>
      </div>
    </div>
  );
};

function SkillElem() {
  return (
    <>
      <h1 className="mb-2 ml-1 display-i-b fontfam-cont">
        {"</>"} Development Skills
      </h1>
      <div className="row justify-c textal-c gap-1">
        {personData.skills.map((skill, index) => (
          <Elem key={index} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default SkillElem;
