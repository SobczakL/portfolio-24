import React, { useContext } from "react";

export default React.forwardRef(function SectionContainer({
    ID,
    title,
    content,
    id,
}, ref) {

    return (
        <div
            ref={ref}
            id={id}
            className="">
            <div className="h-full flex flex-col justify-between gap-4 md:gap-6 p-3 md:px-4 py-8 md:py-16 lg:py-5 lg:px-8">
                <p className="bg-main-bg text-subheader-sm md:text-subheader-md lg:text-subheader-lg">
                    {title}
                </p>
                <div className="content-center">
                    {content}
                </div>
            </div>
        </div>
    );
})
