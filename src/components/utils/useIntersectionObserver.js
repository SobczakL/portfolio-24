import { useRef, useEffect, useState } from "react";

export const useIntersectionObserver = ({
    threshold,
    rootMargin,
    onIntersect
}) => {
    const refs = useRef([]);
    const [activeSection, setActiveSection] = useState(null)

    useEffect(() => {
        const currentRefs = refs.current;
        const observerOptions = {
            root: null,
            rootMargin,
            threshold,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );

        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [threshold, rootMargin, onIntersect]);

    const setRef = (index) => (el) => {
        refs.current[index] = el;
    }

    return {
        activeSection,
        setRef
    }
}
