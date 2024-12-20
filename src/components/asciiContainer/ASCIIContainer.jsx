import { useRef } from "react"
import { useASCIIGen } from "../utils/useASCIIGen"

export default function ASCIIContainer() {

    const parentRef = useRef()
    const canvasRef = useRef()
    const outputRef = useRef()
    const imageURL = "./images/gigachad.jpeg"

    useASCIIGen(imageURL, parentRef, canvasRef, outputRef)

    return (
        <div
            className="relative h-2/4 md:h-3/4 w-full md:w-2/4 lg:max-w-[600px] border "
            ref={parentRef}
        >
            <canvas
                ref={canvasRef}
                className="hidden"
            ></canvas>
            <pre
                ref={outputRef}
                className="absolute inset-0 text-[0.5em] leading-[1.2] whitespace-pre overflow-auto"
            ></pre>

        </div>
    )
}
