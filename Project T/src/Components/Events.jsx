import React from 'react'
import "./Events.css"

const Events = () => {
    return (
        <>
        <div className='events-header' style={{flexDirection: 'column'}}>
            <img src="src/Assets/luckies_logo.png" alt="logo" className='logo-img' />
            <h1 className="eventWelcome">Welcome! At Lucky's on third, we dance to the beat of our own pub. call it home, call it a friend, call it the happiest hours of your life. lucky's is your kind of bar. come make memories here.</h1>
            <img className="weekImg" src="https://static.wixstatic.com/media/263d76_11d4cdc728b34c98961b28bc8ad1bef7~mv2.png/v1/fill/w_1242,h_699,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sunday%20(1366%20%C3%97%20769%20px).png"/>
            <h2>Upcoming</h2>
            <h1>Events</h1>
            <br></br>
            <p>Lucky's on third hosts weekly Tuesday night trivia, Wednesday night bingo, and Thursday night karaoke</p>
            <p>**keep an eye on our Instagram for cancellations + theme nights!**</p>
            <iframe className='map' src="https://calendar.google.com/calendar/embed?src=0bbe6d59ecf62b1ff4ed7910f3f8d25011f8e4cb6307a2033c4f47cafe3bd4f4%40group.calendar.google.com&ctz=America%2FChicago" style={ {border: 0, width: 800, height: 600, frameborder: 0, scrolling: "no"}}></iframe>
        </div>
        </>
    )
}
export default Events
