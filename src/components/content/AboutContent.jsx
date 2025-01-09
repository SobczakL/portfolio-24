import { useState, useEffect } from "react";

export default function AboutContent() {
    const content = [
        "Self-taught Frontend Developer",
        "E-commerce background with a user-first mindset",
        "Impactful performance responsive design",
        "Analytical creative problem-solver",
        "Tutor and mentor to aspiring developers",
        "Solution driven",
        "Entrepreneurial spirit"
    ];

    const createPlaceholderBinary = (arr) => {
        let maxChar = 0
        let binaryReplacement = []
        arr.forEach((sentence) => {
            if (maxChar < sentence.length) {
                maxChar = sentence.length
            }
        })
        for (let i = 0; i < arr.length; i++) {
            let curLine = []
            for (let j = 0; j <= maxChar; j++) {
                let randomIndex = Math.round(Math.random())
                curLine.push(randomIndex.toString())
            }
            binaryReplacement.push(curLine.join(''))
        }
        return binaryReplacement
    }

    //Find at what random int can we start rendering content
    //given the length of each placeholder line.

    const [placeholderText, setPlaceholderText] = useState(createPlaceholderBinary(content))

    useEffect(() => {
        const intervalIDs = content.map((sentence, index) =>
            setInterval(() => {
                setPlaceholderText((prevTexts) => {
                    const newTexts = [...prevTexts]
                    const currentPlaceholder = newTexts[index];
                    const newPlaceholder = currentPlaceholder.split("");
                    const randomIndex = Math.floor(
                        Math.random() * currentPlaceholder.length
                    );

                    if (newPlaceholder[randomIndex] !== sentence[randomIndex]) {
                        newPlaceholder[randomIndex] = sentence[randomIndex];
                        newTexts[index] = newPlaceholder.join("");
                    }

                    return newTexts;
                });
            }, 30)
        );

        return () => {
            intervalIDs.forEach(clearInterval);
        };
    }, []);

    return (
        <div className="space-y-10 h-fit">
            {placeholderText.map((text, index) => (
                <div
                    key={index}
                    id={text.id}
                    className="text-body-sm md:text-body-md lg:text-body-lg w-full text-center"
                >
                    {text}
                </div>
            ))}

        </div>
    );
}
