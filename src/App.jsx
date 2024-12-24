import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SectionList from "./components/sectionList/SectionList";

function App() {

    return (
        <div className="bg-main-bg text-white">
            <Header />
            <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
                <Hero />
                <SectionList />
            </div>
        </div>
    );
}

export default App;
