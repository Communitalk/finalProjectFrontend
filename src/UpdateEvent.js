import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar.js';
import EventsJumbotron from './EventsJumbotron';

const UpdateEvent = () => {

    const [state, setState] = useState(
        {
            updated: false,
            loading: false,
            errors: 0,
            messages: []
        }
    );

    // These will be assigned values by React
    let  place, participantsNumber, _id, time

    const updateEvent = () => {
       
        let errors = 0;
        let messages = [];

        if(_id.value.length < 1) {
            errors++;
            messages.push('Please enter a valid group name')
        }
        if(place.value.length < 1) {
            errors++;
            messages.push('Please enter a floor number ')
        }
        
        if(participantsNumber.value.length < 1) {
            errors++;
            messages.push('Please enter a floor number ')
        }
        
        if(time.value.length < 1) {
            errors++;
            messages.push('Please enter a floor number ')
        }
        
        // If user makes any mistake
        if(errors > 0) {
            setState(
                {
                    ...state,
                    errors: errors,
                    messages: messages,
                }
            )
            return;
        } 
        // If no mistake occurs, reset the errors
        else {
            setState(
                {
                    ...state,
                    errors: 0,
                    messages: [],
                    loading: true
                }
            )
        }

        fetch(`${process.env.REACT_APP_API_URL}events/updateEvent`, {
            method: 'POST',
            body: JSON.stringify({
                _id: _id.value,
                place: place.value,
                participantsNumber: participantsNumber.value,
                time:time.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (json)=> {
                const { message } = json;
                if(message === "The event has been updated!") {
                    //
                    setState(
                        {
                            ...state,
                            updated: true,
                            loading: false
                        }
                    )
                } else {
                    //alert("Please check all the fields");
                    setState(
                        {
                            loading: false
                        }
                    )
                }
            }
        )
    }

    // If the user is updated, redirect them
    if(state.updated === true) {
        return (<Redirect to="/events"/>)
    }

    // Otherwise, show the registration form
    else {
        return(
            <div style={{ backgroundImage: `url(${require("./background3.jpg")})`, color:"white"}}>
                <NavBar />
                <EventsJumbotron></EventsJumbotron>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label>
                                        Event ID
                                    </label>

                                    <input 
                                    ref={(comp)=>_id = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="_id"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Place
                                    </label>

                                    <input 
                                    ref={(comp)=>place = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="place"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Number of Participants
                                    </label>

                                    <input 
                                    ref={(comp)=>participantsNumber = comp}
                                    type="number" 
                                    className="form-control" 
                                    aria-describedby="participantsNumber"/>
                                </div>
                            
                                <div className="form-group">
                                    <label>
                                        Time
                                    </label>

                                    <input 
                                    ref={(comp)=>time = comp}
                                    type="date" 
                                    className="form-control" 
                                    aria-describedby="time"/>
                                    
                                </div>

                                <button
                                onClick={updateEvent}
                                type="button"
                                className="btn btn-primary">Update
                                </button>
                                <br/><br/>

                                {
                                 state.loading && 
                                 <div className="loader">
                                    <svg className="circular" viewBox="25 25 50 50">
                                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                                }

                                {
                                    state.errors > 0 &&
                                    <div class="alert alert-danger" role="alert">
                                        {
                                            state.messages.map(
                                                (message)=><p>{message}</p>
                                            )
                                        }
                                    </div>
                                }
                        </div>
                    </div>
                </div>
              </div>
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
        )
    }
}

export default UpdateEvent;