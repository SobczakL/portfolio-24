export default function SectionContainer({ ID, title, child, isActive, onClick }) {
  console.log(isActive)
  return (
    <div 
    onClick={onClick}
    className="grow p-[12px] md:p-[16px] lg:p-[20px] flex flex-col justify-between border-white border">
      <p className="text-subheader-sm md:text-subheader-md lg:text-subheader-lg">
        {title}
      </p>
      <div 
        className=""
        style={{
          display: isActive ? "block" : "none"
        }}
      >{child}</div>
      <span className="text-subheader-sm md:text-subheader-md lg:text-subheader-lg self-end">
        0{ID + 1}
      </span>
    </div>
  );
}
