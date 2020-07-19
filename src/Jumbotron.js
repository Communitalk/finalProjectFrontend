import React from 'react';
import './App.css';


const Jumbotron = (prop) => {

  
    return (
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor : "rgba(0,0,0,0.35)"}} >
        <div className="container"  >
          <h1 className="display-4" >{prop.title}</h1>
          <p className="lead">{prop.description}</p>
          {prop.children}
        </div>
      </div>
    )
}

export default Jumbotron;