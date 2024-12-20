import { useEffect } from "react";

export function useASCIIGen(imageURL, parentRef, canvasRef, outputRef) {

    const generateASCII = (canvas, ctx, asciiOutput) => {
        const density =
            "$@b%8&wm#*oakdpwmo0qlcjyxzvuxjft/|()1{}[]?-_+~<>i!;:,^`'. ";
        const width = canvas.width;
        const height = canvas.height;
        const imagedata = ctx.getImageData(0, 0, width, height);
        const lines = [];
        let ascii = "";

        for (let y = 0; y < height; y += 2) {
            let line = "";
            for (let x = 0; x < width; x += 2) {

                let totalBrightness = 0;

                for (let gY = 0; gY < 2; gY++) {
                    for (let gX = 0; gX < 2; gX++) {
                        const offset = ((y + gY) * width + (x + gX)) * 4;
                        const r = imagedata.data[offset];
                        const g = imagedata.data[offset + 1];
                        const b = imagedata.data[offset + 2];
                        totalBrightness += (r + g + b) / 3;
                    }
                }
                const charindex = Math.floor(((totalBrightness / 4) / 255) * (density.length - 1));
                line += density[charindex];
            }
            lines.push(line);
        }

        let currentLine = 0;
        function printLine() {
            if (currentLine < lines.length) {
                ascii += lines[currentLine] + "\n";
                asciiOutput.textContent = ascii;
                currentLine++;
                setTimeout(printLine, 80);
            }
        }

        printLine();
    }

    const handleimage = (url, parent, canvas, output) => {
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = url;
        image.onload = () => {
            const aspectRatio = image.width / image.height;

            let maxwidth = Math.floor(parent.offsetWidth / 1.2)
            let maxheight = Math.floor((maxwidth / aspectRatio) / 2);

            canvas.width = maxwidth;
            canvas.height = maxheight;

            ctx.drawImage(image, 0, 0, maxwidth, maxheight);
            generateASCII(canvas, ctx, output);
        };

        image.onerror = (error) => {
            console.error('Error loading image:', error)
            output.textContent = "Error loading image";
        }
    }

    useEffect(() => {
        const updateASCII = () => {
            if (!imageURL || !parentRef.current || !canvasRef.current || !outputRef.current) return;

            outputRef.current.textContent = "";
            handleimage(
                imageURL,
                parentRef.current,
                canvasRef.current,
                outputRef.current
            )
        }
        updateASCII();

        const resizeObserver = new ResizeObserver(updateASCII)
        if (parentRef.current) {
            resizeObserver.observe(parentRef.current)
        }

        return () => resizeObserver.disconnect()
    }, [imageURL, parentRef, canvasRef, outputRef])

    // async function handleVideo(videoUrl) {
    //     const video = document.createElement("video");
    //     video.src = videoUrl;
    //     video.muted = true;
    //     video.crossOrigin = "Anonymous";
    //     video.currentTime = 0;
    //
    //     video.onerror = () => {
    //         console.error(
    //             "Failed to load video. Please check the URL and format.",
    //         );
    //     };
    //
    //     video.addEventListener("loadedmetadata", () => {
    //         const aspectRatio = video.videoWidth / video.videoHeight;
    //
    //         // Calculate maximum canvas dimensions while maintaining aspect ratio
    //         let maxwidth = parent.offsetWidth / 7.85;
    //         let maxheight = Math.round(maxwidth / aspectRatio);
    //
    //         const charHeightRatio = 2;
    //         maxheight = Math.round(maxheight / charHeightRatio);
    //
    //         canvas.width = maxwidth;
    //         canvas.height = maxheight;
    //     });
    //
    //     // Play the video once metadata is loaded
    //     await video.play();
    //
    //     // Update the canvas and generate ASCII on each frame
    //     video.addEventListener("timeupdate", () => {
    //         const aspectRatio = video.videoWidth / video.videoHeight;
    //
    //         let maxwidth = parent.offsetWidth / 7.85;
    //         let maxheight = Math.round(maxwidth / aspectRatio);
    //
    //         const charHeightRatio = 2;
    //         maxheight = Math.round(maxheight / charHeightRatio);
    //
    //         canvas.width = maxwidth;
    //         canvas.height = maxheight;
    //
    //         ctx.drawImage(video, 0, 0, maxwidth, maxheight);
    //         generateASCII();
    //     });
    // }

}
