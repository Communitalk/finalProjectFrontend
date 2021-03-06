import React from 'react';


export const CardButton = () => {} 

const Card = (prop) => {

    let cardTitle;

    const makeAction = () => {
      alert(cardTitle.innerText)
    };


    return (
        <div className="card" style={{width: "18rem", color:"black", marginBottom:'20px'}}>
          <img 
            src={prop.image} 
            className="card-img-top" 
            alt={prop.title} 
            style={{maxHeight:"10rem"}}
          />
          <div className="card-body">

            <h5 
              ref={ (comp)=> cardTitle = comp} 
              className="card-title">{prop.title}
            </h5>

            <p className="card-text">{prop.description}</p>
            <p className="card-text">Floor: {prop.x}</p>
            <p className="card-text">Building: {prop.y}</p>
            <p className="card-text">Area: {prop.z}</p>
            <a 
                onClick={makeAction}
                href={prop.buttonLink} 
                className="btn btn-primary"
            >{prop.buttonLabel}</a>
          </div>
        </div>
    )
}

export default Card;