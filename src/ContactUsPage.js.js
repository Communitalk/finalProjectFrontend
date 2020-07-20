import React from 'react';
import Jumbotron from './Jumbotron.js';
import ContactJumbotron from './ContactJumbotron.js';
import NavBar from './NavBar.js';




const ContactUsPage = () => {

  

  return (
    <div style={{ backgroundImage: `url(${require("./background2.jpg")})`}}>
        <NavBar />
        <ContactJumbotron  >
         
        </ContactJumbotron>
        
        
        <Jumbotron >     
            <section className="features-icons  text-center" >
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-screen-desktop m-auto"></i>
                    </div>
                    <h3  >Email</h3>
                    <h5 >communitalkfinalproject@gmail.com </h5>
                    
                    
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-layers m-auto text-primary"></i>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div className="features-icons-icon d-flex">
                      <i className="icon-check m-auto text-primary"></i>
                    </div>
                    <h3 >Location</h3>
                    <h5>AstroLabs Coding Bootcamp 2020 </h5>
                    <h5>Dubai, United Arab Emirates </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Jumbotron>
 
    </div>
  );
}


export default ContactUsPage;