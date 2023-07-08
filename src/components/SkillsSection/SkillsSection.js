import Heading from "../Heading/Heading";
import Border from "../Border/Border";
import SkillElem from "./SkillElem";
import OtherSkills from "./OtherSkill";
import htmlLogo from "./../../assets/icons/html.svg";
import cssLogo from "./../../assets/icons/css.svg";
import sassLogo from "./../../assets/icons/sass.svg";
import jsLogo from "./../../assets/icons/js.svg";
import tsLogo from "./../../assets/icons/ts.svg";
import reactLogo from "./../../assets/icons/react.svg";

const skills = [
  { name: "HTML", src: htmlLogo },
  { name: "CSS", src: cssLogo },
  { name: "SASS", src: sassLogo },
  { name: "JavaScript", src: jsLogo },
  { name: "TypeScript", src: tsLogo },
  { name: "React", src: reactLogo },
];
const other = [
  "ES6+",
  "Redux",
  "Framer Motion",
  "Gulp",
  "Git & Github",
  "Chrome DevTools",
];

function SkillsSection({ content }) {
  return (
    <>
      <section id="Skills" className="container text-primary-light-9 mb-4 pt-5">
        <Heading name="Skill" title="My Toolbox" />
        <p className="fontfam-temp font-md fontwt-200">{content}</p>
        <div className="row justify-c textal-c mt-3">
          <div className="col-12-xs col-8-md textal-l">
            <SkillElem skills={skills} />
          </div>
          <div className="col-12-xs col-4-md textal-l">
            <OtherSkills skills={other} />
          </div>
        </div>
      </section>
      <Border />
    </>
  );
}

export default SkillsSection;
