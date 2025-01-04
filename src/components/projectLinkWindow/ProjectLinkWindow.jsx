export default function ProjectLinkWindow({ isActive, link }) {

    //TODO: add videos per project
    return (
        <div className={`absolute z-10 ${isActive ? "block" : "hidden"}`}
            style={{ top: '50px', left: '50px', backgroundColor: 'white', zIndex: 100 }}
        >
        </div>
    )
}
