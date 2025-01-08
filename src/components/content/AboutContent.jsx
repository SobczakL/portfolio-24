import { useState } from "react";

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

    const findLongestWordLength = (arr) => {
        let maxChar = 0
        arr.forEach((sentence) => {
            const longestWordLength = sentence.split(" ").sort((prev, curr) => curr.length > - prev.length)[0].length

            if (maxChar < longestWordLength) {
                maxChar = longestWordLength
            }
        })
        return maxChar;
    }

    const createPlaceholderBinary = (arr) => {
        let maxChar = 0
        let binaryReplacement = []
        arr.forEach((sentence) => {
            if (maxChar < sentence.length){
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

    console.log(createPlaceholderBinary(content))
    const [placeholderText, setPlaceholderText] = useState(createPlaceholderBinary(content))

    return (
        <div className="space-y-10 h-fit">
            {placeholderText.map((text, index) => (
                <div
                    key={text.id}
                    id={text.id}
                    className="text-body-sm md:text-body-md lg:text-body-lg w-full text-center"
                >
                    {text}
                </div>
            ))}

        </div>
    );
}
