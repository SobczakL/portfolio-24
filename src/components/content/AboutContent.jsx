import { useState, useEffect, useContext } from "react";

export default function AboutContent() {
    const [active, setActive] = useState(0)
    const content = [
        "Self-taught Frontend Developer",
        "E-commerce background with a user-first mindset",
        "Impactful performance responsive design",
        "Analytical creative problem-solver",
        "Tutor and mentor to aspiring developers",
        "Solution driven",
        "Entrepreneurial spirit"
    ];
    useEffect(() => {
        const getNewActive = () => {
            for(let i = 0; i < content.length; i++){
                setActive(i)
            }
            i = 0
        }
    },[])

    return (
        <div className="h-fit">
            {content.map((text, index) => (
                <span
                    key={index}
                    id={text.id}
                    className="text-body-sm md:text-body-md lg:text-body-lg "
                >
                    {text + " "}
                </span>
            ))}

        </div>
    );
}
