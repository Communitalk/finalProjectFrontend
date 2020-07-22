import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Jumbotron from './Jumbotron.js';
import MainJumbotron from './MainJumbotron.js';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';
import NewsletterForm from './NewsletterForm.js';




const ProjectLandingPage = () => {

  

  return (
    <div style={{ backgroundImage: `url(${require("./background3.jpg")})`}}>
        <NavBar />
        <MainJumbotron 
        >
         
        </MainJumbotron>
        <Jumbotron>
      
          <h5 style={{textAlign: 'center', paddingBottom: "10px"}}> Sign up and become part of the CommuniTalk </h5>
        <Link
            to="/register" className="btn btn-primary btn-block btn-lg" >
                Sign Up
            </Link>
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
                    <h3  >Why Communitalk?</h3>
                    <p className="lead mb-0" >Reach out to your surrounding by creating communitie(s) whether it's by floor, same building or even area!</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-layers m-auto text-primary"></i>
                    </div>
                    <h3 >How does it work?</h3>
                    <p className="lead mb-0" >You can organize events, discuss different topics, or just simply use it to communicate with your neighbors. </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-check m-auto text-primary"></i>
                    </div>
                    <h3 >Easy to Use</h3>
                    <p className="lead mb-0" >Simple and straightfoward, with a customizable design</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Jumbotron>
        <Jumbotron 
           >
          <section >
            <div className="container-fluid" >
              <div className="row " >

                <div className="col-lg-6 order-lg-2 " style={{ backgroundImage: `url(${require("./gathering2.jpg")})` , backgroundSize: "cover", minHeight: '25rem', maxWidth: '600px'}}></div>
                <div className="col-lg-6 order-lg-1 ">
                  <h2 style={{paddingTop: '7rem'}}>Plan &amp; Organize</h2>
                  <p  className="lead mb-0">Who doesn't enjoy social gatherings! With our services you can plan and organise gatherings and parties with your nearby community.</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-6 order-lg-1" style={{ backgroundImage: `url(${require("./ask.jpg")})` , backgroundSize: "cover", minHeight: '25rem', maxWidth: '600px'}} ></div>
                <div className="col-lg-6 order-lg-2">
                  <h2 style={{paddingTop: '7rem'}}>Need a Help!</h2>
                  <p  className="lead mb-0">Just moved recently and you feel kinda lost? or looking for a shop and can't find it? With our App you can ask and find nearby people who would be more than happy to help.</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-6 order-lg-2 " style={{ backgroundImage: `url(${require("./easy.jpg")})` , backgroundSize: "cover", minHeight: '25rem', maxWidth: '600px'}} ></div>
                <div className="col-lg-6 order-lg-1 " >
                  <h2 style={{paddingTop: '7rem'}} >Easy to Use &amp; Customize</h2>
                  <p  className="lead mb-0">With many features, you will find it easy to customize the app the way you feel most cpomfortable with!</p>
                </div>
              </div>
            </div>
          </section>
      
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


export default ProjectLandingPage;