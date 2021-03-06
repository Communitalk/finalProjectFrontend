import React from 'react';
import './App.css';


const Jumbotron1 = (prop) => {

  
    return (
      <div className=" jumbotron-fluid border" style={{ backgroundImage: `url(${require("./logo1.png")})`, backgroundSize: 'cover',minHeight:'45rem', backgroundPosition: '100% 100%'}} >
        <div className="container"  >
          <h1 className="display-4">{prop.title}</h1>
          <p className="lead">{prop.description}</p>
          {prop.children}
        </div>
      </div>
    )
}

export default Jumbotron1;