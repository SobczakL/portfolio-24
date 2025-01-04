import data from "../data/data.json"
import ProjectContainer from "../projectContainer/ProjectContainer"
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

export default function ProjectsSection() {

    const {activeSection, setRef} = useIntersectionObserver({
        threshold: 1,
        rootMargin: "0px",
    })
    return (
        <div>
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
