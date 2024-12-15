import { useState } from "react";
import "./App.css";
import AboutContent from "./components/content/AboutContent";
import Header from "./components/header/Header";
import SectionContainer from "./components/sectionContainer/SectionContainer";
import Hero from "./components/hero/Hero";

function App() {
  const sections = [
    { title: "About", content: <AboutContent /> },
    { title: "Projects", content: "content" },
    { title: "Contact", content: "content" },
  ];

  const [activeElement, setActiveElement] = useState("");

  const handleClickedSection = (title) => {
    setActiveElement(title);
    console.log("section clicked", ID)
  };

  return (
    <div className="bg-main-bg h-dvh text-white flex flex-col">
      <Header />
      <div className="grow flex flex-col">
        <Hero />
        {sections.map((section, id) => {
          return (
            <SectionContainer
              key={id}
              ID={id}
              isActive={activeElement === section.title}
              title={section.title}
              child={section.content}
              onClick={() => handleClickedSection(section.title)}
            />
          );
        })}
      </div>
      {/* render each section here?
      or
      sep with addition component */}
      {/* footer */}
    </div>
  );
}

export default App;
