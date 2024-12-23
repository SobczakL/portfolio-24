import { useState, useEffect, useRef } from "react";
import "./App.css";
import AboutContent from "./components/content/AboutContent";
import Header from "./components/header/Header";
import SectionContainer from "./components/sectionContainer/SectionContainer";
import Hero from "./components/hero/Hero";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    const currentRefs = sectionRefs.current;

    const observerOptions = {
      root: null,
      rootMargin: "-100px",
      threshold: [0.2, 0.6, 0.9, 1.0],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sections = [
    { title: "About", content: <AboutContent /> },
    { title: "Projects", content: "content" },
    { title: "Contact", content: "content" },
  ];

  return (
    <div className="bg-main-bg text-white">
      <Header />
      <Hero />
      <div className="h-fit flex flex-col">
        {sections.map((section, index) => {
          return (
            <SectionContainer
              key={index}
              ID={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              isActive={activeSection === section.title}
              title={section.title}
              content={section.content}
              id={section.title}
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
