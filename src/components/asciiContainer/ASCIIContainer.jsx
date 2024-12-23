import { useRef } from "react"
import { useASCIIGen } from "../utils/useASCIIGen"

export default function ASCIIContainer() {

    const parentRef = useRef()
    const canvasRef = useRef()
    const outputRef = useRef()
    // const imageURL = "./images/gigachad.jpeg"
    const imageURL = "./images/emoji.jpg"

    useASCIIGen(imageURL, parentRef, canvasRef, outputRef)

    return (
        <div
            className="relative h-[316px] md:h-[360px] lg:h-[400px] w-[316px] md:w-[360px] lg:w-[400px] overflow-hidden"
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
