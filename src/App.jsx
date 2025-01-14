import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
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
        <div className="h-full scroll-smooth bg-main-bg text-white">
            <Header />
            <div className="relative">
                <Hero scrollPos={offsetY} />
                <SectionList scroll={offsetY}/>
            </div>
        </div>
    );
}

export default App;
