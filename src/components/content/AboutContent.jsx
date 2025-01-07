import { useEffect, useState } from "react";
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
