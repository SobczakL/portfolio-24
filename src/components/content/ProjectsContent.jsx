import data from "../data/data.json"
import ProjectContainer from "../projectContainer/ProjectContainer"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
    const [rootMargin, setRootMargin] = useState("")

    useEffect(() => {
        const calculateRootMargin = (width) => {
            if (width < 768){
                return "-120px"
            }
            else if (width < 1000){
                return "-140px"
            }
            else {
                return "-60px"
            }
        }

        const updateRootMargin = () => {
            const newMargin = calculateRootMargin(window.innerWidth)
            setRootMargin(newMargin)
        }
        updateRootMargin();

        window.addEventListener("resize", updateRootMargin)

        return () => window.addEventListener("resize", updateRootMargin)
    },[])

    const {activeSection, setRef} = useIntersectionObserver({
        threshold: [0.3, 0.6, 0.9, 1.0],
        rootMargin: rootMargin || "-120px",
    })

    return (
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
            {data.map((project, index) => {
                return (
                    <ProjectContainer
                        key={index}
                        project={project}
                        ref={setRef(index)}
                        isActive={activeSection === project.title}
                        id={project.title}
                    />
                )
            })}
        </div>
    )
}
