import React from 'react'
import "./Locations.css"

const Locations = () => {
    return (
        <>
            <div className="title" style={{ backgroundImage: `url(src/Assets/m_2_brothers_sports_bar_grill_photo.png)` }}>
                <h2>Locations</h2>
            </div>

            <div className="locations">
                <div className="card">
                    <span className="font-extrabold">LUCKY'S ON THIRD</span>
                    <span className="font-bold">(559) 967-5980 | <a href="https://www.instagram.com/luckysonthird/">Instagram</a></span>
                    <span >107 W 3rd St</span>
                    <span>Winona, MN 55987</span>
                    <span>Mon-Fri: 4PM–1AM</span>
                    <span>Sat: 2PM–1AM</span>
                    <span>Sun: 11AM–1AM</span>
                </div>
                <div className="card">
                    <span className="font-extrabold">2 BROTHERS</span>
                    <span className="font-bold">(507) 474-3003 | <a href="https://www.instagram.com/2brothersonthird/">Instagram</a></span>
                    <span>129 W Third</span>
                    <span>Winona, MN 55987</span>
                    <span>Closed: Mondays</span>
                    <span>Kitchen: 11AM-9PM</span>
                    <span>Bar: 11AM-1AM</span>
                </div>
            </div>

        </>
    )
}
export default Locations
