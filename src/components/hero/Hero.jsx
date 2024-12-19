import { useState, useEffect } from "react";

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aboutContentText = [
    "/ FULL STACK DEVELOPER",
    "/ TORONTO, CANADA",
    windowWidth < 1200
      ? "/ SCROLL FOR PROJECTS"
      : "/ USE YOUR KEYBOARD TO NAVIGATE",
  ];

  //Replace each content character with '-' at render
  const [placeholderText, setPlaceholderText] = useState(() => {
    let initState = [];
    aboutContentText.map((text) => initState.push("-".repeat(text.length)));
    return initState;
  });

  //Post render, replace each '-' with aboutContentText chars at random
  //Only triggers at inital page render
  useEffect(() => {
    const intervalIDs = aboutContentText.map((text, index) =>
      setInterval(() => {
        setPlaceholderText((prevTexts) => {
          const newTexts = [...prevTexts];

          const currentPlaceholder = newTexts[index];
          const newPlaceholder = currentPlaceholder.split("");

          const randomIndex = Math.floor(
            Math.random() * currentPlaceholder.length
          );

          if (newPlaceholder[randomIndex] !== text[randomIndex]) {
            newPlaceholder[randomIndex] = text[randomIndex];
            newTexts[index] = newPlaceholder.join("");
          }

          return newTexts;
        });
      }, 100)
    );

    return () => {
      intervalIDs.forEach(clearInterval);
    };
  }, []);

  // Determine text alignment
//TODO: fix logic here - its buggy when expand and make smaller screen
  const getTextAlignment = (index) => {
    if(windowWidth < 768){
      if(index === 1) return "text-center"
      if(index === 2) return "text-right"
      return "text-left"
    }
    if(windowWidth >= 768){
      if(index === 1) return "text-right"
      if(index === 2) return "text-center"
      return "left"
    }
  }

  return (
    <div className="h-[600px] flex flex-col justify-center md:flex-row p-[12px] md:px-[16px] md:py-16 lg:py-[20px] lg:px-auto border-white border">
      {/* main image placeholder */}
      <div className="h-2/4 md:h-3/4 w-full md:w-2/4 lg:max-w-[600px] bg-white"></div>
      <div className="h-2/4 md:h-3/4 w-full md:w-2/4 grid grid-rows-3 items-center md:px-8 lg:max-w-[600px]">
        {placeholderText.map((text, index) => {
          return (
            <p
              key={index}
              className={`text-hero-sm md:text-hero-md lg:text-hero-lg ${getTextAlignment(index)}`}
            >
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
