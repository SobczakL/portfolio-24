import SectionContainer from "../sectionContainer/SectionContainer";
import AboutContent from "../content/AboutContent";
import ProjectsContent from "../content/ProjectsContent";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver"

export default function SectionList() {

    // const [isObserverActive, setIsObserverActive]

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
            className="flex flex-col mb-12 md:mb-14 lg:mb-20"
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
