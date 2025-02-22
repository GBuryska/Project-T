import React from "react";

interface Props {
    name: String;
    description: String;
    price: Number;
}

export const FoodItem = (props: Props) => {
    const { name, description, price } = props;

    return (
        <td className="food">
            <h2>{`${name} | ${price}`}</h2>
            <p>{description}</p>
        </td>
    )
}
