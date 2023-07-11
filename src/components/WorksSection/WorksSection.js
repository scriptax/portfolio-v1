import Heading from "../Heading/Heading";
import React from "react";
import WorkCard from "./WorkCard";
import Border from "../Border/Border";
import personData from "./../../data/personData.json";
import * as pics from "./../../utils/pics";

function WorksSection() {
  return (
    <>
      <section id="Work" className="container text-primary-light-9 mb-4 pt-5">
        <Heading name="Skill" title="Some Things I've Built" />
        <p className="fontfam-temp font-md fontwt-200"></p>
        {Object.keys(personData.works).map((work, index) => (
          <WorkCard
            key={index}
            data={personData.works[work]}
            img={pics[work]}
          />
        ))}
      </section>
      <Border />
    </>
  );
}

export default WorksSection;
