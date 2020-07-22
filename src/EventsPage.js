import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Card from './Card2.js';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';
import EventsJumbotron from './EventsJumbotron';
import { Link } from 'react-router-dom';

// 1. Connect to the globalState
// 2. Conditionally render the cards
// 3. Use the useEffect() to subscribe to the globalState.loggedIn
// 4. If globalState.loggedIn is true, fetch products from db

const EventsPage = () => {

  const [globalState, setGlobalState] = useContext(AppContext);
  const [state, setState] = useState({ events: []})

  useEffect(
    () => {
      // only fetch products if and when the user logs in
      if(globalState.loggedIn === true) {
        fetch(`${process.env.REACT_APP_API_URL}events`)
        .then(
          (result)=>result.json()
        )
        .then (
          (json)=> {
            setState(
              {
                ...state,
                events: json.events
              }
            )
          }
        );
      }
    },
    [ globalState.loggedIn ]
  )

  return (
    <div style={{ backgroundImage: `url(${require("./background3.jpg")})`}}>
        <NavBar />
        <EventsJumbotron></EventsJumbotron>
        
        <Jumbotron 
          title="Featured Events" 
        >
          <Link className = 'btn btn-primary '
          style={{maxWidth:"10rem", maxHeight:"3rem", textAlign:"center", marginBottom:"20px"}} to='./EventRegistration'>New Event</Link>
        <div className="row">
          {
            globalState.loggedIn === true &&
            state.events.map(
              (event)=>
                <div className="col-lg-4 col-sm-6">
                  <Card 
                    title={event.name}
                    description={event.description} 
                    x= {event.time}
                    y = {event.organizer}
                    z={event.participantsNumber} 
                    buttonLabel="Update"
                    buttonLink="/updateEvent"
                  />
                </div>
            )
          }

          {
            globalState.loggedIn === false &&
            <div className="col-lg-4 col-sm-6">
              <p>Please login to see the coming events.</p>
            </div>
          }
          </div>
        </Jumbotron>

        <footer class="footer bg-light" style={{backgroundColor : ' #ffffff'}}>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
          <ul class="list-inline mb-2">
            <li class="list-inline-item">
              <a href="#">About</a>
            </li>
            <li class="list-inline-item">&sdot;</li>
            <li class="list-inline-item">
              <a href="#">Contact</a>
            </li>
            <li class="list-inline-item">&sdot;</li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
            <li class="list-inline-item">&sdot;</li>
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p class="text-muted small mb-4 mb-lg-0">&copy; CommuniTalk 2020. All Rights Reserved.</p>
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul class="list-inline mb-0">
            <li class="list-inline-item mr-3">
              <a href="#">
                <i class="fab fa-facebook fa-2x fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item mr-3">
              <a href="#">
                <i class="fab fa-twitter-square fa-2x fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-instagram fa-2x fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

    </div>
  );
}


export default EventsPage;
