import React from 'react';


export const CardButton = () => {} 

const Card2 = (prop) => {

    let cardTitle;

    const makeAction = () => {
      alert(cardTitle.innerText)
    };


    return (
        <div className="card" style={{width: "18rem", color:"black", marginBottom:'20px'}}>
          
          <div className="card-body">

            <h5 
              ref={ (comp)=> cardTitle = comp} 
              className="card-title">{prop.title}
            </h5>

            <p className="card-text">{prop.description}</p>
            <p className="card-text">Time : {prop.x}</p>
            <p className="card-text">Organizer : {prop.y}</p>
            <p className="card-text">Number of participants: {prop.z}</p>
            <a 
                onClick={makeAction}
                href={prop.buttonLink} 
                className="btn btn-primary"
            >{prop.buttonLabel}</a>
          </div>
        </div>
    )
}

export default Card2;