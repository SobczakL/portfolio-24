import React from "react"
import ProjectLinkWindow from "../projectLinkWindow/ProjectLinkWindow"

export default React.forwardRef(function ProjectContainer({
    project,
    isActive,
    id
}, ref) {
    return (
        <div
            ref={ref}
            id={id}
            className={`${isActive ? "opacity-100" : "opacity-70 scale-95"} relative flex gap-5 w-full pb-5 md:pb-6 lg:pb-8 text-body-sm md:text-body-md lg:text-body-lg h-auto`}>
            {/* <p>[]&gt;</p> */}
            <div className="flex flex-col md:flex-row gap-5 w-full justify-between">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <div className="flex flex-col justify-between">
                        <p className="text-projectDetails-sm md:text-projectDetails-md lg:text-projectDetails-lg">
                            PR. NAME
                        </p>
                        <p className="text-projectTitle-sm md:text-projectTitle-md lg:text-projectTitle-lg align-top w-fit"
                        >
                            {project.title}
                        </p>
                        <div className="flex items-center gap-5">
                            <p>{project.year}</p>
                            <div className={`w-4 h-4 ${isActive ? "bg-accent-green" : "bg-white"}`}></div>
                            &#9166;
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-between gap-4 md:max-w-[75%]"
                    >
                        <p>{project.description}</p>
                        <p>TECH: {project.stack}</p>
                    </div>
                </div>
                <p className={`min-w-fit text-projectDetails-sm md:text-projectDetails-md lg:text-projectDetails-lg hover:underline ${isActive ? "block" : "hidden"}`}>
                    <a href={project.link} alt="project link">
                        LINK -&gt;
                    </a>
                </p>
            </div>
            <ProjectLinkWindow isActive={isActive} link={project.link} />
        </div>
    )
})
