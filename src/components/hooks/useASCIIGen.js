import { useEffect } from "react";

export function useASCIIGen(mediaURL, mediaType, parentRef, canvasRef, outputRef) {

    const generateASCII = (canvas, ctx, output) => {
        // const density =
        //     "$@b%8&wm#*oakdpwmo0qlcjyxzvuxjft/|()1{}[]?-_+~<>i!;:,^`'. ";
        const density =
            " .:-=+*o%@";

        // const density =
        //     "@%#*+=-:. ";
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
        output.textContent = ascii;
    };


    const handleImage = (url, parent, canvas, output) => {
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = url;
        image.onload = () => {
            const containerWidth = parent.offsetWidth
            const containerHeight = parent.offsetHeight
            canvas.width = Math.floor(containerWidth / 16)
            canvas.height = Math.floor(containerHeight / 9.6)
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            generateASCII(canvas, ctx, output);
        };

        image.onerror = (error) => {
            console.error("Error loading image:", error);
            output.textContent = "Error loading image";
        };
    };

    const handleVideo = (url, parent, canvas, output) => {
        const ctx = canvas.getContext("2d");
        const video = document.createElement("video");
        video.src = url;
        video.muted = true;
        video.crossOrigin = "anonymous";
        video.autoplay = true;
        video.loop = true;

        video.onerror = () => {
            console.error("Error loading video");
            output.textContent = "Error loading video";
        };

        video.addEventListener("loadedmetadata", () => {
            const containerWidth = parent.offsetWidth;
            const containerHeight = parent.offsetHeight;

            const charWidth = 5.5;
            const charHeight = 9.6;

            const maxCharsWidth = Math.floor(containerWidth / charWidth);
            const maxCharsHeight = Math.floor(containerHeight / charHeight);

            canvas.width = Math.floor(maxCharsWidth * 2);
            canvas.height = maxCharsHeight * 2;

            video.play();
        });

        video.addEventListener("play", () => {
            const updateFrame = () => {
                if (!video.paused && !video.ended) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    generateASCII(canvas, ctx, output);
                    requestAnimationFrame(updateFrame);
                }
            };
            updateFrame();
        });
    };

    useEffect(() => {
        const updateASCII = () => {
            if (!mediaURL || !parentRef.current || !canvasRef.current || !outputRef.current) return;

            outputRef.current.textContent = "";

            if (mediaType === "image") {
                handleImage(mediaURL, parentRef.current, canvasRef.current, outputRef.current);
            } else if (mediaType === "video") {
                handleVideo(mediaURL, parentRef.current, canvasRef.current, outputRef.current);
            }
        };

        updateASCII();

        const resizeObserver = new ResizeObserver(updateASCII);
        if (parentRef.current) {
            resizeObserver.observe(parentRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [mediaURL, mediaType, parentRef, canvasRef, outputRef]);
}
