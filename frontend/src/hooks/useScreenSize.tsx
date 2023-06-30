import { useState, useEffect } from "react";

const useScreenSize = () => {

    // const isClient = typeof window !== "undefined";

    // const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
    // const [height, setHeight] = useState(isClient ? window.innerHeight : 0);

    // useEffect(() => {
    //     if (!isClient) {
    //         return;
    //     }

    //     const handleResize = () => {
    //         setWidth(window.innerWidth);
    //         setHeight(window.innerHeight);
    //     };

    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, [isClient]);

    // return { width, height };
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        handleResize(); // Set initial dimensions

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return { width, height };

}

export default useScreenSize;