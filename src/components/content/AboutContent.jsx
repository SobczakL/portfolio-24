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

    const createPlaceholderBinary = (arr) => {
        let maxChar = 0
        arr.forEach((sentence) => {
            const longestWordLength = sentence.split(" ").sort((prev, curr) => curr.length > - prev.length)[0].length

            if(maxChar < longestWordLength){
                maxChar = longestWordLength
            }
        })
        let curLine = []
        for (let i = 0; i < maxChar; i++) {
            let randomIndex = Math.round(Math.random())
            curLine.push(randomIndex.toString())
        }
        console.log(curLine.join(''))
        return curLine.join('')
    }

console.log(createPlaceholderBinary(content))
    const [placeholderText, setPlaceholderText] = useState(() => {
        let initState = []
        content.map((sentence) => {
            initState.push(createPlaceholderBinary(sentence))
        })
        return initState
    })

    return (
        <div className="h-full"
        >
            <div className="space-y-10">
                {content.map((item, index) => (
                    <div
                        key={item.id}
                        id={item.id}
                        className="text-body-sm md:text-body-md lg:text-body-lg w-full text-center"
                    >
                        {item.text}
                    </div>
                ))}

            </div>
        </div>
    );
}
