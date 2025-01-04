import SectionContainer from "../sectionContainer/SectionContainer";
import AboutContent from "../content/AboutContent";
import ProjectsContent from "../content/ProjectsContent";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

export default function SectionList() {

    const sections = [
        { title: "About", content: <AboutContent /> },
        { title: "Projects", content: <ProjectsContent /> },
        { title: "Contact", content: "content" },
    ];

    const {activeSection, setRef} = useIntersectionObserver({
        threshold: [0.3, 0.6, 0.9, 1.0],
        rootMargin: "-50px",

    })

    return (
        <div className="flex flex-col">
            {sections.map((section, index) => {
                return (
                    <SectionContainer
                        key={index}
                        ID={index}
                        ref={setRef(index)}
                        isActive={activeSection === section.title}
                        title={section.title}
                        content={section.content}
                        id={section.title}
                    />
                );
            })}
        </div>
    )
}
