import SectionContainer from "../sectionContainer/SectionContainer";
import AboutContent from "../content/AboutContent";
import ProjectsContent from "../content/ProjectsContent";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";
import { createContext } from "react";


export const ActiveObserverContext = createContext(false)

export default function SectionList({scrollPos}) {

    // const [isObserverActive, setIsObserverActive]

    const sections = [
        { title: "About", content: <AboutContent /> },
        { title: "Projects", content: <ProjectsContent /> },
        { title: "Contact", content: "content" },
    ];


    //TODO: do I need this? SectionContainer is rerendered each time...
    const { activeSection, setRef } = useIntersectionObserver({
        threshold: [0.3, 0.6, 0.9, 1.0],
        rootMargin: "-50px",

    })

    return (
        <div
            className="flex flex-col bg-inherit snap-y lg:max-w-[1200px] lg:mx-auto"
            style={{
                transform: `translateY(-${scrollPos * 0.9}px)`
            }}

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
