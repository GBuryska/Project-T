import React from 'react'
import "./Menu.css"
import { FoodItem } from './FoodItem'

export const Menu = () => {
    return (
        <div className="menu">  
            <h className="title">LUNCH + DINNER MENU</h>  
            <h1 className="submenu">STARTING LINEUP</h1>
            <p>Your pre-game, mid-game, and post-game favorites. Treat yourself.</p>
            <div className="columns">
                <tr>
                    <FoodItem name="CHEESE CURDS" price={11} description="A midwest favorite– served with your favorite dipping sauce."/>
                    <FoodItem name="STUFFED + LOADED TATER KEGS" price={10} description="Six golden-fried spuds stuffed with bacon, chives, and melted cheddar cheese served with sour cream."/>
                </tr>
            </div>
        </div> 
    )
}
export default Menu
