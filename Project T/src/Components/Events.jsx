import React, { useEffect } from 'react'
import { gapi } from 'gapi-script'
import moment from 'moment'; // Make sure you have moment installed: npm install moment
import "./Events.css"

const CALENDAR_ID = '0bbe6d59ecf62b1ff4ed7910f3f8d25011f8e4cb6307a2033c4f47cafe3bd4f4@group.calendar.google.com';
const API_KEY = 'AIzaSyBD__G41SU4AoqEruvy0pEaPoMdNRVyEnY';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];


const GoogleCalendar = () => {
    const [events, setEvents] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [days, setDays] = React.useState([]);
    useEffect(() => {
        gapi.load('client', () => { // Load just the client
          gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: DISCOVERY_DOCS,
          }).then(() => {
            loadCalendarEvents();
          }).catch((err) => {
            console.error("Error initializing gapi:", err);
            setError("Error initializing Google API.");
            setIsLoading(false);
          });
        });
      }, []);
      useEffect(() => {
        const generateDates = () => {
            const firstDayOfMonth = moment().startOf('month'); // Get the first day of the current month
            const dateArray = [];
      
            for (let i = 0; i < 30; i++) {
              const currentDate = firstDayOfMonth.clone().add(i, 'days'); // Clone to avoid modifying the original
              dateArray.push(currentDate.format('YYYY-MM-DD'));
            }
            setDays(dateArray);
          };
          generateDates();
      }, []);
    
      const loadCalendarEvents = () => {
        setIsLoading(true);
        setError(null);
    
        gapi.client.calendar.events.list({
          'calendarId': CALENDAR_ID,
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime',
        }).then((response) => {
          const fetchedEvents = response.result.items;
          setEvents(fetchedEvents || []);
          setIsLoading(false);
        }, (err) => {
          console.error("Error fetching calendar events:", err);
          setError("Error fetching calendar events.");
          setIsLoading(false);
        });
    };
    let i =0;
    let cur = '';
    let objs = [];
    return (
        <div>
            {days.map((day) => {
                console.log(day);
                const event = events.find((e) => {
                    if (e.start.date === day) {
                        return true;
                    }
                    return false;
                });
                console.log(event);
                if (event) {
                    cur = cur + event.start.date + ' ' + event.summary;
                } else {
                    cur = cur + day + ' ';
                }
                i++;
                if (i == 7) {
                    objs.push(<p>{cur}</p>);
                    cur = '';
                    i=0;
                }
            })}
            {objs.map((obj) => {
                return obj;
            })}
        </div>
    )
}

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
            <GoogleCalendar></GoogleCalendar>
            <iframe className='map' src="https://calendar.google.com/calendar/embed?src=0bbe6d59ecf62b1ff4ed7910f3f8d25011f8e4cb6307a2033c4f47cafe3bd4f4%40group.calendar.google.com&ctz=America%2FChicago" style={ {border: 0, width: 800, height: 600, frameborder: 0, scrolling: "no"}}></iframe>
        </div>
        </>
    )
}
export default Events
