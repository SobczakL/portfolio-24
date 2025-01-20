import { useRef } from "react"
import { useASCIIGen } from "../hooks/useASCIIGen"

export default function ASCIIContainer() {

    const parentRef = useRef()
    const canvasRef = useRef()
    const outputRef = useRef()
    const videoURL = "./images/life-video.mp4"

    useASCIIGen(videoURL, "video", parentRef, canvasRef, outputRef)

    return (
        <div
            className="relative size-full aspect-[4/3] lg:w-5/6 lg:h-auto"
            ref={parentRef}
        >
            <canvas
                ref={canvasRef}
                className="hidden"
            ></canvas>
            <pre
                ref={outputRef}
                className="absolute inset-0 left-0 right-0 text-[0.3em] leading-[1.2] whitespace-pre overflow-hidden"
            ></pre>

        </div>
    )
}
