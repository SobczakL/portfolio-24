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
            }, 50)
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
        <div className="font-pixel self-center h-fit md:h-3/6 w-full px-3 md:px-4 py-4 md:py-16 lg:py-5 md:max-w-full lg:max-w-[1200px] lg:mx-auto">
            <div className="h-full flex flex-col place-items-center justify-start md:flex-row gap-8 md:gap-0 lg:gap-16">
                <div className="place-content-center place-items-center w-full md:w-3/6 h-auto aspect-[4/3]">
                    <ASCIIContainer />
                </div>
                <div className="size-full gap-20 md:w-3/6 flex flex-col md:px-8 lg:px-0 lg:max-w-[600px]">
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
