import { useState, useEffect } from "react";
import ASCIIContainer from "../asciiContainer/ASCIIContainer";

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
        "/ SCROLL FOR PROJECTS"
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
    const getTextAlignment = (index) => {
        if (windowWidth < 768) {
            if (index === 1) return "text-center"
            if (index === 2) return "text-right"
            return "text-left"
        }
        if (windowWidth >= 768) {
            if (index === 1) return "text-right"
            if (index === 2) return "text-center"
            return "left"
        }
    }

    return (
        <div className="h-4/6 border-white border">
            <div className="h-full flex gap-8 md:gap-0  flex-col place-items-center justify-between md:flex-row px-3 md:px-4 py-8 md:py-16 lg:py-5 lg:max-w-[1200px] lg:mx-auto">
                <div className="md:place-content-center md:place-items-center h-full md:w-2/4">
                    <ASCIIContainer />
                </div>
                <div className="h-2/4 md:h-full lg:h-full w-full md:w-2/4 grid grid-rows-3 items-center md:px-8 lg:px-0 lg:max-w-[600px]">
                    {placeholderText.map((text, index) => {
                        return (
                            <p
                                key={index}
                                className={`text-hero-sm md:text-hero-md lg:text-hero-lg ${getTextAlignment(index)}`}
                            >
                                {text}{index === 2 ? " ↓" : ""}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
