import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroContainer from "./components/heroContainer/HeroContainer"
import SectionList from "./components/sectionList/SectionList";

function App() {
    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="bg-main-bg text-white">
            <div className="relative h-screen">
                <Header />
                <HeroContainer scrollPos={offsetY} />
            </div>
            <div className="bg-inherit relative h-screen snap-mandatory">
                <SectionList scroll={offsetY} />
            </div>
        </div>
    );
}

export default App;
