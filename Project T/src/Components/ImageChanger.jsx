import React, { useEffect, useState } from "react";

export const imc = () => {
    const [i, sei] = useState(0);
    
    useEffect(() => {
        const tim = setInterval(() => {
            sei((pre) => (pre == 5 ? 0 : pre + 1));
        }, 5000);

        return (() => clearInterval(tim))
    }, [])

    return (
        <img src={`src/assets/${index}.jpg`} />
    ) 
};
