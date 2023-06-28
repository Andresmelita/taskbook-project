import { useState, useEffect } from "react";

const useScreenSize = () => {

    const isClient = typeof window === 'object';

    const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
    const [height, setHeight] = useState(isClient ? window.innerHeight : 0);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isClient]);

    return { width, height };
}

export default useScreenSize;