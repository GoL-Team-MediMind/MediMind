import React, { useState, useEffect } from "react";
import "../Loader/loader.css"

const Loader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);
        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    const preloaderClassName = `preloader ${isLoaded ? "loaded" : ""}`;

    return (
        <div className={preloaderClassName} data-preloader>
            <div className="circle"></div>
        </div>
    );
};

export default Loader;
