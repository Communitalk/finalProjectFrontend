import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';
import GroupsJumbotron from './GroupsJumbotron';
import { Link } from 'react-router-dom';

// 1. Connect to the globalState
// 2. Conditionally render the cards
// 3. Use the useEffect() to subscribe to the globalState.loggedIn
// 4. If globalState.loggedIn is true, fetch products from db

const GroupsPage = () => {

  const [globalState, setGlobalState] = useContext(AppContext);
  const [state, setState] = useState({ groups: []})

  useEffect(
    () => {
      // only fetch groups if and when the user logs in
      if(globalState.loggedIn === true) {
        fetch(`${process.env.REACT_APP_API_URL}groups`)
        .then(
          (result)=>result.json()
        )
        .then (
          (json)=> {
            setState(
              {
                ...state,
                groups: json.groups
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
        <GroupsJumbotron></GroupsJumbotron>
        
        <Jumbotron 
          title="Featured Groups" 
        >
          <Link className = 'btn btn-primary  '
          style={{maxWidth:"10rem", maxHeight:"3rem", textAlign:"center", marginBottom:"20px"}} to='./GroupRegistration'>Create Group</Link>
        <div className="row">
          
          {
            globalState.loggedIn === true &&
            state.groups.map(
              (group)=>
                <div className="col-lg-4 col-sm-6">
                  <Card 
                    title={group.name}
                    description={group.building}
                    image={group.image}
                    x = {group.floor}
                    y = {group.building}
                    z= {group.area}
                    buttonLabel="Update"
                    buttonLink="/updateGroup"
                  >
                    
                  </Card>
                </div>
            )
          }

          {
            globalState.loggedIn === false &&
            <div className="col-lg-4 col-sm-6">
              <p>Please login to see the existing groups.</p>
            </div>
          }
          </div>
        </Jumbotron>
    </div>
  );
}


export default GroupsPage;
