import { useIntersectionObserver } from "../utils/useIntersectionObserver";

export default function AboutContent() {
    const content = [
        { id: "content-0", text: "Self-taught Frontend Developer" },
        { id: "content-1", text: "E-commerce background with a user-first mindset" },
        { id: "content-2", text: "Impactful performance responsive design" },
        { id: "content-3", text: "Analytical creative problem-solver" },
        { id: "content-4", text: "Tutor and mentor to aspiring developers" },
        { id: "content-5", text: "Solution driven" },
        { id: "content-6", text: "Entrepreneurial spirit" },
    ];

    const {activeSection, setRef} = useIntersectionObserver({
        threshold: [0.2, 0.6, 0.9, 1.0],
        rootMargin: "-100px",

    })


    return (
        <div className="space-y-10">
                {content.map((item, index) => (
                    <div
                        key={item.id}
                        id={item.id}
                        ref={setRef(index)}
                        className={`text-body-sm md:text-body-md lg:text-body-lg w-full text-center
              transform transition-all duration-300 ease-in-out
              ${activeSection === index ? "scale-105 opacity-100" : "scale-95 opacity-50"}
            `}
                    >
                        <span
                            className={`${activeSection === index
                                    ? "inline text-accent-green px-1"
                                    : "hidden"
                                }`}
                        >
                            {"{"}
                        </span>
                        {item.text}
                        <span
                            className={`${activeSection === index
                                    ? "inline text-accent-green px-1"
                                    : "hidden"
                                }`}
                        >
                            {"}"}
                        </span>
                    </div>
                ))}
        </div>
    );
}
