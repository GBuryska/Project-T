import React from "react";

interface Props {
    name: String;
    description: String;
    price: Number;
}

export const FoodItem = (props: Props) => {
    const { name, description, price } = props;

    return (
        <td className="food" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', textAlign: "center"}}>
            <h2>{`${name} | ${price}`}</h2>
            <p style={{ maxWidth: "30rem"}}>{description}</p>
        </td>
    )
}
