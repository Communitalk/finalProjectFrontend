import React from 'react';
import './App.css';


const ContactJumbotron = (prop) => {

  
    return (
      <div className=" jumbotron-fluid" style={{ backgroundImage: `url(${require("./banner4.jpg")})`, backgroundSize: 'cover',minHeight:'15rem', backgroundPosition: '100% 50%'}} >
        <div className="container"  >
          <h1 className="display-4">{prop.title}</h1>
          <p className="lead">{prop.description}</p>
          {prop.children}
        </div>
      </div>
    )
}

export default ContactJumbotron;