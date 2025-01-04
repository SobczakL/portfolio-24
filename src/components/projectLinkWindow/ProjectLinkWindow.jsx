export default function ProjectLinkWindow({ isActive, link }) {

    return (
        <div className={`absolute z-10 ${isActive ? "block" : "hidden"}`}
            style={{ top: '50px', left: '50px', backgroundColor: 'white', zIndex: 100 }}
        >
        </div>
    )
}
