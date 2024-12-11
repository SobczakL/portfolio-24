import "./App.css";
import Header from "./components/header/Header";
import SectionContainer from "./components/sectionContainer/SectionContainer";

function App() {
    const sections = [
        {"title": "About", "content": "content"},
        {"title": "Projects", "content": "content"},
        {"title": "Contact", "content": "content"}
    ]

  return (
    <div className="bg-main-bg h-dvh text-white">
      <Header />
      {sections.map((section, id) => {
        return (
            <>
                <SectionContainer
                key={id}
                title={section.title}
                />
            </>
        )
      })}
      {/* render each section here?
      or
      sep with addition component */}
      {/* footer */}
    </div>
  );
}

export default App;
