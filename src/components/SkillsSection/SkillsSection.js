import Heading from "../Heading/Heading";
import Border from "../Border/Border";
import SkillElem from "./SkillElem";
import OtherSkills from "./OtherSkill";
import personData from "./../../data/personData.json";

function SkillsSection() {
  return (
    <>
      <section id="Skills" className="container text-primary-light-9 mb-4 pt-5">
        <Heading name="Skill" title="My Toolbox" />
        <p className="fontfam-temp font-md fontwt-200">
          {personData.skillsText}
        </p>
        <div className="row justify-c textal-c mt-3">
          <div className="col-12-xs col-8-md textal-l">
            <SkillElem />
          </div>
          <div className="col-12-xs col-4-md textal-l">
            <OtherSkills />
          </div>
        </div>
      </section>
      <Border />
    </>
  );
}

export default SkillsSection;
