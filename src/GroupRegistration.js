import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar.js';
import GroupsJumbotron from './GroupsJumbotron';

const GroupRegistration = () => {

    const [state, setState] = useState(
        {
            registered: false,
            loading: false,
            errors: 0,
            messages: []
        }
    );

    // These will be assigned values by React
    let name;
    let floor;
    let building;
    let area;
    let image;

    const createGroup = () => {
       
        let errors = 0;
        let messages = [];

        if(name.value.length < 1) {
            errors++;
            messages.push('Please enter a valid group name')
        }
        if(floor.value.length < 1) {
            errors++;
            messages.push('Please enter a floor number ')
        }
        if(building.value.length < 1) {
            errors++;
            messages.push('Please enter a floor number ')
        }
        if(area.value.length < 1) {
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

        fetch(`${process.env.REACT_APP_API_URL}groups/createGroup`, {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                floor: floor.value,
                building: building.value,
                area: area.value,
                image:image.value
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
                if(message === "Group has been created!") {
                    //
                    setState(
                        {
                            ...state,
                            registered: true,
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

    // If the user is registered, redirect them
    if(state.registered === true) {
        return (<Redirect to="/groups"/>)
    }

    // Otherwise, show the registration form
    else {
        return(
            <div style={{ backgroundImage: `url(${require("./background3.jpg")})`, color:"white"}}>
                <NavBar />
                <GroupsJumbotron></GroupsJumbotron>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label>
                                        Name
                                    </label>

                                    <input 
                                    ref={(comp)=>name = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="name"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Floor
                                    </label>

                                    <input 
                                    ref={(comp)=>floor = comp}
                                    type="number" 
                                    className="form-control" 
                                    aria-describedby="floor"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Building
                                    </label>

                                    <input 
                                    ref={(comp)=>building = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="building"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Area
                                    </label>

                                    <input 
                                    ref={(comp)=>area = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="area"/>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Image
                                    </label>

                                    <input 
                                    ref={(comp)=>image = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="image"/>
                                </div>

                                <button
                                onClick={createGroup}
                                type="button"
                                className="btn btn-primary">Create
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
            </div>
        )
    }
}

export default GroupRegistration;