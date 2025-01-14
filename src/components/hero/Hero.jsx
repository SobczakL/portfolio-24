import { useState, useEffect } from "react";
import ASCIIContainer from "../asciiContainer/ASCIIContainer";
import HeroCopy from "../heroCopy/HeroCopy";

export default function Hero({ scrollPos }) {

    return (
        <div
            className="relative font-pixel h-screen w-full px-3 md:px-4 md:max-w-full lg:max-w-[1200px] lg:mx-auto"
        >
            <div className="h-full flex flex-col justify-center gap-16 md:gap-0 lg:gap-16">
                <div
                    className="flex sticky top-0 z-10 pt-4 w-full h-auto md:w-5/6"
                >
                    <ASCIIContainer />
                </div>
                <HeroCopy scrollPos={scrollPos} />
            </div>
        </div>
    );
}
