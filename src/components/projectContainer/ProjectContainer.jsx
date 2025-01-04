export default function ProjectContainer({ project }) {
    return (
        <div className="flex gap-5 w-full py-5 md:py-6 lg:py-8 text-body-sm md:text-body-md lg:text-body-lg h-auto">
            <p>[]&gt;</p>
            <div className="flex gap-5 w-full justify-between">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-projectDetails-sm md:text-projectDetails-md lg:text-projectDetails-lg">
                            PR. NAME
                        </p>
                        <p className="text-projectTitle-sm md:text-projectTitle-md lg:text-projectTitle-lg align-top w-fit"
                        >
                            {project.title}
                        </p>
                        <div className="flex items-center gap-5">
                            <p>{project.year}</p>
                            <div className="w-4 h-4 bg-accent-green"></div>
                            &#9166;
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p>{project.description}</p>
                        <p>TECH: {project.stack}</p>
                    </div>
                </div>
                <p className="mt-auto min-w-fit text-projectDetails-sm md:text-projectDetails-md lg:text-projectDetails-lg hover:underline">
                    <a href={project.link} alt="project link">
                        LINK -&gt;
                    </a>
                </p>
            </div>
        </div>
    )
}
