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
    className="h-60 p-[12px] md:p-[16px] lg:p-[20px] flex flex-col justify-between border-white border">
      <p className="text-subheader-sm md:text-subheader-md lg:text-subheader-lg">
        {title}
      </p>
      <div 
        className=""
        style={{
          display: isActive ? "block" : "none"
        }}
      >{content}</div>
      <span className="text-subheader-sm md:text-subheader-md lg:text-subheader-lg self-end">
        0{ID + 1}
      </span>
    </div>
  );
})
