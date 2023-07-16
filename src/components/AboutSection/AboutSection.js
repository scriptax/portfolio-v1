import Heading from "../Heading/Heading";
import Border from "../Border/Border";
import personData from "./../../data/person-data.json";

const Section = () => {
  return (
    <>
      <section id="About" className="container text-primary-light-9 mb-4 pt-5">
        <Heading name="About" title="About Me" />
        <p className="fontfam-temp font-md fontwt-200">{personData.aboutme}</p>
      </section>
      <Border />
    </>
  );
};

export default Section;
