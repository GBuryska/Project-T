import React from "react";

interface pro {
    nam: String;
    desc: String;
    pri: Number;
}

export const ite = (pro: pro) => {
    const { nam, desc, pri } = pro;

    return (
        <td className="food" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', textAlign: "center"}}>
            <h2>{`${nam} | ${pri}`}</h2>
            <p style={{ maxWidth: "30rem"}}>{desc}</p>
        </td>
    )
}
