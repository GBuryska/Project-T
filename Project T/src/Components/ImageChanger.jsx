import React, { useState } from "react";

export const ImageChanger = () => {
    const [index, setIndex] = useState(0);
    
    setInterval(() => {
        setIndex(index == 5 ? 0 : index + 1);
    }, 5000);

    return (
        <img src={`src/assets/${index}.jpg`} />
    ) 
};
