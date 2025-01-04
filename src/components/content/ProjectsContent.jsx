import data from "../data/data.json"
import ProjectContainer from "../projectContainer/ProjectContainer"
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

export default function ProjectsSection() {

    const {activeSection, setRef} = useIntersectionObserver({
        threshold: 0.8,
        rootMargin: "-55px",
    })

    return (
        <div className="flex flex-col gap-8 md:gap-8 lg:gap-10">
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
