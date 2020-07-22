import React from 'react';
import './App.css';


const GroupsJumbotron = (prop) => {

  
    return (
      <div className=" jumbotron-fluid border" style={{ backgroundImage: `url(${require("./banner1.jpg")})`, backgroundSize: 'cover',minHeight:'20rem', backgroundPosition: '80% 80%'}} >
        <div className="container"  >
          <h1 className="display-4">{prop.title}</h1>
          <p className="lead">{prop.description}</p>
          {prop.children}
        </div>
      </div>
    )
}

export default GroupsJumbotron;