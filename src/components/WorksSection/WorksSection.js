import Heading from "../Heading/Heading";
import React from "react";
import WorkCard from "./WorkCard";
import PersonData from "./../../data/PersonData.json";
import weatherAppPic from "./../../assets/images/weather-app.jpg";
import noteAppPic from "./../../assets/images/note-app.jpg";
import stopWatchAppPic from "./../../assets/images/stopwatch-app.jpg";
import htmlLogo from "./../../assets/icons/html.svg";
import cssLogo from "./../../assets/icons/css.svg";
import jsLogo from "./../../assets/icons/js.svg";
import Border from "../Border/Border";
// import sassLogo from "./../../assets/icons/sass.svg";
// import tsLogo from "./../../assets/icons/ts.svg";
// import reactLogo from "./../../assets/icons/react.svg";

const works = [
  {
    name: PersonData.works.weatherApp.name,
    description: PersonData.works.weatherApp.description,
    stack: [htmlLogo, cssLogo, jsLogo],
    pic: weatherAppPic,
    liveLink: PersonData.works.weatherApp.live,
    repoLink: PersonData.works.weatherApp.repo,
  },
  {
    name: PersonData.works.noteApp.name,
    description: PersonData.works.noteApp.description,
    stack: [htmlLogo, cssLogo, jsLogo],
    pic: noteAppPic,
    liveLink: PersonData.works.noteApp.live,
    repoLink: PersonData.works.noteApp.repo,
  },
  {
    name: PersonData.works.stopWatchApp.name,
    description: PersonData.works.stopWatchApp.description,
    stack: [htmlLogo, cssLogo, jsLogo],
    pic: stopWatchAppPic,
    liveLink: PersonData.works.stopWatchApp.live,
    repoLink: PersonData.works.stopWatchApp.repo,
  },
];

function WorksSection({ content }) {
  return (
    <>
      <section id="Work" className="container text-primary-light-9 mb-4 pt-5">
        <Heading name="Skill" title="Some Things I've Built" />
        <p className="fontfam-temp font-md fontwt-200">{content}</p>
        {works.map((work, index) => (
          <WorkCard key={index} data={work} />
        ))}
      </section>
      <Border />
    </>
  );
}

export default WorksSection;
