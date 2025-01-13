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
        { id: 0, content: ["FULL", "STACK", "DEVELOPER"] },
        { id: 1, content: ["TORONTO", "CANADA"] },
        { id: 2, content: ["SCROLL", "FOR", "PROJECTS ↓"] },
    ];

    //Replace each content character with '-' at render
    const [placeholderText, setPlaceholderText] = useState(() =>
        aboutContentText.map(({ content }) =>
            content.map(word => "-".repeat(word.length))
        )
    );

    //Post render, replace each '-' with aboutContentText chars at random
    //Only triggers at inital page render
    useEffect(() => {
        const intervalIDs = aboutContentText.map(({ content }, lineIndex) =>
            setInterval(() => {
                setPlaceholderText((prevTexts) => {
                    const newTexts = [...prevTexts];
                    const currentLine = newTexts[lineIndex];
                    const newLine = [...currentLine];

                    // Replace a random dash in a random word
                    const wordIndex = Math.floor(Math.random() * currentLine.length);
                    const word = currentLine[wordIndex].split("");
                    const targetWord = content[wordIndex];

                    const charIndex = Math.floor(Math.random() * word.length);
                    if (word[charIndex] === "-") {
                        word[charIndex] = targetWord[charIndex];
                        newLine[wordIndex] = word.join("");
                        newTexts[lineIndex] = newLine;
                    }

                    return newTexts;
                });
            }, 50)
        );

        return () => intervalIDs.forEach(clearInterval);
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
            <div className="h-full flex flex-col place-items-center justify-start md:flex-row gap-16 md:gap-0 lg:gap-16">
                <div className="place-content-center place-items-center w-full md:w-3/6 h-auto aspect-[4/3]">
                    <ASCIIContainer />
                </div>
                <div className="size-full gap-20 md:w-3/6 flex flex-col md:px-8 lg:px-0 lg:max-w-[600px]">
                    {placeholderText.map((line, lineIndex) => (
                        <div
                            key={lineIndex}
                            className={`flex justify-end text-hero-sm md:text-hero-md lg:text-hero-lg ${getTextAlignment(lineIndex)} flex gap-2`}
                        >
                            {line.map((word, wordIndex) => (
                                <p key={wordIndex}>{word}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
