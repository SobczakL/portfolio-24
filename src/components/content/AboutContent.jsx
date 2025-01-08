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

    const findRandomIndex = (placeholder, word) => {
        if (word.length > placeholder.length) {
            return null
        }

        const maxStart = placeholder.length - word.length;

        const randomIndex = Math.floor(Math.random() * (maxStart + 1))

        return randomIndex
    }




    const [placeholderText, setPlaceholderText] = useState(createPlaceholderBinary(content))
    useEffect(() => {
        content.map((sentence, index) => {
            setPlaceholderText((prevTexts) => {
                const newTexts = [...prevTexts]
                const currentPlaceholder = newTexts[index];
                const newPlaceholder = currentPlaceholder.split("");
                const randomIndex = findRandomIndex(currentPlaceholder, newPlaceholder)
                if (newPlaceholder[randomIndex] !== sentence[randomIndex]) {
                    newPlaceholder[randomIndex] = sentence[randomIndex];
                    newTexts[index] = newPlaceholder.join("");
                }

                return newTexts;


            })

        })

    }, []);

    console.log(placeholderText[0])
    console.log(content[0].split(" ")[0])
    console.log(findRandomIndex(placeholderText[0], content[0].split(" ")[0]))

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
