import { useRef } from "react"
import { useASCIIGen } from "../utils/useASCIIGen"

export default function ASCIIContainer() {

    const parentRef = useRef()
    const canvasRef = useRef()
    const outputRef = useRef()
    const videoURL = "./images/life-video.mp4"

    useASCIIGen(videoURL, "video", parentRef, canvasRef, outputRef)

    return (
        <div
            className="relative size-full mx-auto md:mx-0 overflow-hidden"
            ref={parentRef}
        >
            <canvas
                ref={canvasRef}
                className="hidden"
            ></canvas>
            <pre
                ref={outputRef}
                className="absolute inset-0 text-[0.3em] leading-[1.2] whitespace-pre overflow-hidden"
            ></pre>

        </div>
    )
}
