import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';
import LoginJumbotron from './LoginJumbotron';
import { Link } from 'react-router-dom';

// 1. Connect to the globalState
// 2. Conditionally render the cards
// 3. Use the useEffect() to subscribe to the globalState.loggedIn
// 4. If globalState.loggedIn is true, fetch products from db

const FeedsPage = () => {

  const [globalState, setGlobalState] = useContext(AppContext);
  const [state, setState] = useState({ feeds: []})

  useEffect(
    () => {
      // only fetch groups if and when the user logs in
      if(globalState.loggedIn === true) {
        fetch(`${process.env.REACT_APP_API_URL}feeds`)
        .then(
          (result)=>result.json()
        )
        .then (
          (json)=> {
            setState(
              {
                ...state,
                feeds: json.feeds
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
        <LoginJumbotron></LoginJumbotron>
        
        <Jumbotron 
          title="Feeds" 
        >
          <Link className = 'btn btn-primary  '
          style={{maxWidth:"10rem", maxHeight:"3rem", textAlign:"center", marginBottom:"20px"}} to='./FeedCreation'>New Feed</Link>
        <div className="row">
          
          {
            globalState.loggedIn === true &&
            state.feeds.map(
              (feed)=>
                <div className="col-lg-4 col-sm-6">
                  <Card 
                    title={feed.username}
                    description={feed.text}
                    image={feed.image}
                    x = {feed.hashtags}
                    
                  >
                    
                  </Card>
                </div>
            )
          }

          {
            globalState.loggedIn === false &&
            <div className="col-lg-4 col-sm-6">
              <p>Please login to see the feeds.</p>
            </div>
          }
          </div>
        </Jumbotron>
    </div>
  );
}


export default FeedsPage;
