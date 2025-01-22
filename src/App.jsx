import { useState, useEffect } from "react";
import "./App.css";
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
        <div className="h-fit lg:h-screen bg-main-bg text-white font-pixel">
            <div className="mx-auto h-full lg:h-[85%] bg-inherit flex flex-col justify-items-center lg:flex-row gap-6 lg:gap-0 px-4 md:px-6">
                <div className="flex flex-col mx-auto w-full md:w-5/6 lg:w-3/6 justify-center">
                    <ASCIIContainer />
                </div>
                <SectionList />
            </div>
            <Footer />
        </div>
    );
}

export default App;
