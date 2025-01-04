import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionList from "./components/sectionList/SectionList";

function App() {

    return (
        <div className="bg-main-bg text-white">
            <Header />
            <div className="scroll-smooth h-screen bg-main-bg">
                <Hero />
                <SectionList />
            </div>
        </div>
    );
}

export default App;
