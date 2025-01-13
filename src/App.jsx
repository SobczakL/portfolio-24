import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionList from "./components/sectionList/SectionList";

function App() {

    return (
        <div className="h-full scroll-smooth bg-main-bg text-white">
            <div className="h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <Hero />
                </div>
            </div>
            <div className="h-screen bg-main-bg">
                <SectionList />
            </div>
        </div>
    );
}

export default App;
