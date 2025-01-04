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
            className="relative h-[316px] md:h-[380px] lg:h-[420px] w-[316px] md:w-[380px] lg:w-[420px] mx-auto md:mx-0 overflow-hidden"
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
