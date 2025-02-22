import React from 'react'
import { ite } from './FoodItem'

export const Menu = () => {
    return (
        <div className="menu" style={{ width: "100%"}}>  
            <h className="title">LUNCH + DINNER MENU</h>
            <br/>
            <br/>
            <br/>  
            <h1 className="submenu">STARTING LINEUP</h1>
            <p>Your pre-game, mid-game, and post-game favorites. Treat yourself.</p>
            <br/>
            <div className="columns">
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ite name="CHEESE CURDS" price={11} description="A midwest favorite– served with your favorite dipping sauce."/>
                    <ite name="STUFFED + LOADED TATER KEGS" price={10} description="Six golden-fried spuds stuffed with bacon, chives, and melted cheddar cheese served with sour cream."/>
                    <ite name="FRIED JALAPENOS" price={8} description="Hand dipped and batter-fried sliced jalapeño coins"/>
                    <ite name="CRISPY ONION STRINGS" price={8} description="Hand dipped and batter-fried shoelace cut onions"/>
                    <ite name="FRIED SHROOMS" price={8} description="Hand dipped and batter-fried sliced mushrooms"/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <h1 className="submenu">BASKETS + SALADS</h1>
            <br/>
            <div className="columns">
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ite name="CHICKEN STRIPS" price={13} description={"Tender chicken fillets batter-fried to crispy perfection and served with your choice of side"}/>
                    <ite name="SHRIMP BASKET" price={13} description="six house-battered and fried jumbo shrimp served with your choice of side, Tartar Sauce, Cocktail Sauce, and a lemon slice"/>
                    <ite name="HOUSE SALAD" price={8} description="Lettuce, tomato, red onion, cucumber, shredded cheese; topped with croutons Add Chicken $4 | Add Avocado\nDressings: Ranch, Bleu Cheese, Caesar, Honey Mustard, French, Thousand Island"/>
                </div>
            </div>
        </div> 
    )
}
export default Menu
