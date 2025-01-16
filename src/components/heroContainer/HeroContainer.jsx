import ASCIIContainer from "../asciiContainer/ASCIIContainer";
import HeroCopy from "../heroCopy/HeroCopy";

export default function HeroContianer({ scrollPos }) {

    return (
        <div
            className="sticky top-0 flex flex-col lg:flex-row gap-8 sm:gap-16 px-3 md:px-4 md:max-w-full lg:max-w-[1200px] lg:mx-auto"
        >
            <div>
                <ASCIIContainer />
            </div>
            <HeroCopy scrollPos={scrollPos} />
        </div>
    );
}
