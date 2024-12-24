import React from "react";

export default React.forwardRef(function SectionContainer({
    ID,
    title,
    content,
    isActive,
    id,
}, ref) {
    return (
        <div
            ref={ref}
            id={id}
            className="h-60 min-h-fit border-white border">
            <div className="h-full flex flex-col justify-between md:flex-row p-3 md:px-4 md:py-16 lg:py-5 lg:px-8">
                <p className="text-subheader-sm md:text-subheader-md lg:text-subheader-lg">
                    {title}
                </p>
                <div
                    className="content-center"
                >{content}</div>
                <span className="text-subheader-sm md:text-subheader-md lg:text-subheader-lg self-end">
                    0{ID + 1}
                </span>

            </div>
        </div>
    );
})
