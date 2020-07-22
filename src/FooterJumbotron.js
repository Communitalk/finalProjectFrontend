import React from 'react';
import './App.css';


const FooterJumbotron = (prop) => {

  
    return (
      <div className="footer" style={{ color:'white'}} >
        <div className="container"  >
          <h1 className="display-4" >{prop.title}</h1>
          <p className="lead">{prop.description}</p>
          {prop.children}
        </div>
      </div>
    )
}

export default FooterJumbotron;