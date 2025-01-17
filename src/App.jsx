import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import ASCIIContainer from "./components/asciiContainer/ASCIIContainer";
import SectionList from "./components/sectionList/SectionList"

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
        <div className="h-fit relative bg-main-bg text-white font-pixel">
            <Header />
            <div className="h-full bg-inherit flex flex-col px-3 md:px-4 md:pb-16 lg:pb-6 lg:px-8 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
                <ASCIIContainer />
                <SectionList />
            </div>
            <Footer />
        </div>
    );
}

export default App;
