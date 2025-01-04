import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionList from "./components/sectionList/SectionList";

function App() {

    return (
        <div className="h-screen scroll-smooth bg-main-bg text-white">
            <Header />
            <div className="h-full bg-main-bg">
                <Hero />
                <SectionList />
            </div>
        </div>
    );
}

export default App;
