import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';
import NewsletterForm from './NewsletterForm.js';



const LandingPage = () => {

  

  return (
    <div style={{ backgroundImage: `url(${require("./CB.jpg")})` , backgroundRepeat: "no-repeat", backgroundSize: "150%"}} >
        <NavBar />
        <Jumbotron 
          title="CommuniTalk" 
          description="Welcome to your neighborhood connector"
        >
        </Jumbotron>
        
        <Jumbotron >     
            <section className="features-icons  text-center" >
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-screen-desktop m-auto"></i>
                    </div>
                    <h3  style={{color : "white"}}>Why Communitalk?</h3>
                    <p className="lead mb-0" style={{color : "white"}}>Reach out to your surrounding by creating communitie(s) whether it's by floor, same building or even area!</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-layers m-auto text-primary"></i>
                    </div>
                    <h3 style={{color : "white"}}>How does it work?</h3>
                    <p className="lead mb-0" style={{color : "white"}}>You can organize events, discuss different topics, or just simply use it to communicate with your neighbors. </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-check m-auto text-primary"></i>
                    </div>
                    <h3 style={{color : "white"}}>Easy to Use</h3>
                    <p className="lead mb-0" style={{color : "white"}}>Simple and straightfoward, with a customizable design</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Jumbotron>
        <Jumbotron 
           >
          <section className="showcase" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
            <div className="container-fluid p-0">
              <div className="row no-gutters">

                <div className="col-lg-6 order-lg-2 text-white showcase-img" ></div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                  <h2 style={{color : "white"}}>Plan &amp; Organize</h2>
                  <p style={{color : "white"}} className="lead mb-0">Who doesn't enjoy social gatherings! With our services you can plan and organise gatherings and parties with your nearby community.</p>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-6 text-white showcase-img" ></div>
                <div className="col-lg-6 my-auto showcase-text">
                  <h2 style={{color : "white"}}>Need a Help!</h2>
                  <p style={{color : "white"}} className="lead mb-0">Just moved recently and you feel kinda lost? or looking for a shop and can't find it? With our App you can ask and find nearby people who would be more than happy to help.</p>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-6 order-lg-2 text-white showcase-img"  ></div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text" width="100" height="50">
                  <h2 style={{color : "white"}}>Easy to Use &amp; Customize</h2>
                  <p style={{color : "white"}} className="lead mb-0">With many features, you will find it easy to customize the app the way you feel most cpomfortable with!</p>
                </div>
              </div>
            </div>
          </section>
      
        </Jumbotron>
        <Jumbotron 
        
        >
           <h2 style={{color : "white"}}>Sign Up</h2>
           <div style={{color : "white"}}>Enter your email below to sign up</div>
           <Link
                    to="/login"
                    className="btn btn-primary" style={{color: "white"}}>
                        Log In
                    </Link>
        </Jumbotron>
        <Jumbotron 
          title="Newsletter" 
          description="Sign up to our newsletter and keep up with the latest community news and events"
        >
          <NewsletterForm />
        </Jumbotron>
    </div>
  );
}


export default LandingPage;