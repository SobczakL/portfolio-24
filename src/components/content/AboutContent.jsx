import { useEffect, useRef, useState } from "react";

export default function AboutContent() {

    const content = [
        { id: "content-0", text: "Self-taught Frontend Developer" },
        { id: "content-1", text: "E-commerce background with a user-first mindset" },
        { id: "content-2", text: "Impactful performance responsive design" },
        { id: "content-3", text: "Analytical creative problem-solver" },
        { id: "content-4", text: "Tutor and mentor to aspiring developers" },
        { id: "content-5", text: "Solution driven" },
        { id: "content-6", text: "Entreprenurial spirit" }
    ]

    const contentRefs = useRef([])
    const [activeContent, setActiveContent] = useState(null)

    useEffect(() => {
        const observers = [];
        const currentRefs = contentRefs.current;

        const observerOptions = {
            root: null,
            rootMargin: "-100px",
            threshold: [0.2],
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = currentRefs.indexOf(entry.target)
                    setActiveContent(index);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="space-y-10 px-8">
            {content.map((item, index) => {
                return (
                    <p
                        key={item.id}
                        id={item.id}
                        ref={(el) => (contentRefs.current[index] = el)}
                        className={
                            `text-body-sm md:text-body-md lg:text-body-lg
w-full
                            text-center transform transition-all duration-100 ease-in-out
                            ${activeContent === index ?
                                "scale-105 opacity-100 text-accent-green border border-accent-green"
                                :
                                "scale-95 opacity-90"
                            }`
                        }
                    >
                        {item.text}
                    </p>
                )
            })}


        </div>
    );
}
