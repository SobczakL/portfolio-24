import { useState, useEffect } from "react";

export default function AboutContent() {
    const aboutContentText = [
        { id: 0, content: "Self-taught Full Stack Developer" },
        { id: 1, content: "Pretty good at moving rectangles around a screen" },
        { id: 2, content: "Toronto, Canada" },
    ];

    const [placeholderText, setPlaceholderText] = useState(() =>
        aboutContentText.map(({ content }) =>
            Array.from({ length: content.length }, () => (Math.random() < 0.5 ? "0" : "1")).join("")
        )
    );

    useEffect(() => {
        const intervalIDs = aboutContentText.map(({ content }, lineIndex) =>
            setInterval(() => {
                setPlaceholderText((prevTexts) => {
                    const newTexts = [...prevTexts];
                    const currentLine = newTexts[lineIndex].split("")
                    const targetLine = content;
                    const indices = [...Array(targetLine.length).keys()].filter(
                        (i) => currentLine[i] === "0" || currentLine[i] === "1"
                    );

                    if (indices.length === 0) {
                        clearInterval(intervalIDs[lineIndex]);
                        return prevTexts;
                    }

                    const randomIndex = indices[Math.floor(Math.random() * indices.length)];
                    currentLine[randomIndex] = targetLine[randomIndex];
                    newTexts[lineIndex] = currentLine.join("");

                    return newTexts;
                });
            }, 70)
        );

        return () => intervalIDs.forEach(clearInterval);
    }, [aboutContentText]);

    return (
        <div className="h-fit">
            {placeholderText.map((line, index) => (
                <p key={index} className="font-mono text-body-sm md:text-body-md lg:text-body-lg">
                    {line}
                </p>
            ))}
        </div>
    );
}
