import { useState, useEffect } from "react";

export default function HeroCopy({ scrollPos }) {
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
        <div className="gap-20 md:w-3/6 flex flex-col md:px-8 lg:px-0 lg:max-w-[600px]">
            {placeholderText.map((line, lineIndex) => (
                <div
                    key={lineIndex}
                    className={`flex justify-end text-hero-sm md:text-hero-md lg:text-hero-lg ${getTextAlignment(lineIndex)} flex gap-2`}
                    style={{
                        transform: `translate(${scrollPos * 1.4}px)`
                    }}
                >
                    {line.map((word, wordIndex) => (
                        <p key={wordIndex}>{word}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}
