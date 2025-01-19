import SectionContainer from "../sectionContainer/SectionContainer";
import AboutContent from "../content/AboutContent";
import ProjectsContent from "../content/ProjectsContent";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver"

export default function SectionList() {

    const sections = [
        { title: "Info", content: <AboutContent /> },
        { title: "Work", content: <ProjectsContent /> },
    ];


    //TODO: do I need this? SectionContainer is rerendered each time...
    const { activeSection, setRef } = useIntersectionObserver({
        threshold: [0.3, 0.6, 0.9, 1.0],
        rootMargin: "-50px",

    })

    return (
        <div
            className="flex flex-col gap-6 md:gap-8 lg:w-3/6 lg:overflow-y-scroll lg:pt-[15%]"
        >
            {sections.map((section, index) => {
                return (
                    <SectionContainer
                        key={index}
                        ID={index}
                        ref={setRef(index)}
                        isActive={activeSection === section.title}
                        id={section.title}
                        title={section.title}
                        content={section.content}
                    >
                    </SectionContainer>
                );
            })}
        </div>
    )
}
