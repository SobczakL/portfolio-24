import { useState, useEffect } from "react";

export default function Hero() {
  //TODO: handle window screen size changes after render
  const aboutContentText = [
    "/ FULL STACK DEVELOPER",
    "/ TORONTO, CANADA",
    `${
      window.innerWidth < 1200
        ? "/ SCROLL FOR PROJECTS"
        : "/ USE YOUR KEYBOARD TO NAVIGATE"
    }`,
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

  return (
    <div className="h-[250px] flex flex-col justify-between p-[12px] md:p-[16px] lg:p-[20px] border-white border">
      {placeholderText.map((text, index) => {
        return (
          <p
            key={index}
            className="text-body-sm md:text-body-md lg:text-body-lg"
            style={{
              textAlign: index == 1 ? "center" : index == 2 ? "right" : "",
            }}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}
