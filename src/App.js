import { useState, createContext } from "react";
import personData from "./data/PersonData.json";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import WorksSection from "./components/WorksSection/WorksSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const AccentContext = createContext();

function App() {
  const [accent, setAccent] = useState("blue");

  const accentPicker = (color) => {
    setAccent(color);
  };

  return (
    <div className="app">
      <AccentContext.Provider value={accent}>
        <Navbar accentPicker={accentPicker} />
        <Landing content={personData.landingData} />
        <AboutSection content={personData.aboutme} />
        <SkillsSection content={personData.aboutme} />
        <WorksSection content={personData.aboutme} />
        <Contact />
        <Footer content={personData} />
      </AccentContext.Provider>
    </div>
  );
}

export { AccentContext };
export default App;
