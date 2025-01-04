import data from "../data/data.json"
import ProjectContainer from "../projectContainer/ProjectContainer"

export default function ProjectsSection() {
    return (
        <div>
            {data.map((project, index) => {
                return (
                    <ProjectContainer
                        key={index}
                        project={project}
                    />
                )
            })}
        </div>
    )
}
