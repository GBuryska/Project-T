import React, { useEffect, useState } from "react";

export const ImageChanger = () => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex == 5 ? 0 : prevIndex + 1));
        }, 5000);

        return (() => clearInterval(timer))
    }, [])

    return (
        <img src={`src/assets/${index}.jpg`} />
    ) 
};
