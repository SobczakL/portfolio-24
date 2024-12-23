import { useEffect } from "react";

export function useASCIIGen(imageURL, parentRef, canvasRef, outputRef) {

    const generateASCII = (canvas, ctx, asciiOutput) => {
        const density =
            "$@b%8&wm#*oakdpwmo0qlcjyxzvuxjft/|()1{}[]?-_+~<>i!;:,^`'. ";
        const width = canvas.width;
        const height = canvas.height;
        const imagedata = ctx.getImageData(0, 0, width, height);
        let ascii = "";

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const offset = (y * width + x) * 4;
                const r = imagedata.data[offset];
                const g = imagedata.data[offset + 1];
                const b = imagedata.data[offset + 2];
                const avg = (r + g + b) / 3;
                const charindex = Math.floor((avg / 255) * (density.length - 1));
                ascii += density[charindex];
            }
            ascii += "\n";
        }
        asciiOutput.textContent = ascii;
    }

    const handleimage = (url, parent, canvas, output) => {
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = url;
        image.onload = () => {

            const containerWidth = parent.offsetWidth
            const containerHeight = parent.offsetHeight

            const charWidth = 5.5;
            const charHeight = 9.6;

            const maxCharsWidth = Math.floor(containerWidth / charWidth)
            const maxCharsHeight = Math.floor(containerHeight / charHeight)

            canvas.width = Math.floor(maxCharsWidth * 2);
            canvas.height = maxCharsHeight * 2;

            ctx.drawImage(image, 0, 0, (Math.floor(maxCharsWidth * 2)), (maxCharsHeight * 2));
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
