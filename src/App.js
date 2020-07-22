import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import LandingPage from './ProjectLandingPage';
import LoginPage from './LoginPage';
import ContactUsPage from './ContactUsPage.js';
import UserRegistrationPage from './RegistrationPage.js';
import GroupsPage from './GroupsPage.js';
import EventsPage from './EventsPage.js';
import SettingsPage from './SettingsPage';
import './App.css';
import GroupRegistration from './GroupRegistration';
import EventRegistration from './EventRegistration';
import UpdateGroup from './UpdateGroup.js';
import UpdateEvent from './UpdateEvent';


const PrivateRoute = ({ component: Component, ...otherProps }) => {

    const [globalState, setGlobalState] = useContext(AppContext);

    if(globalState.loggedIn) {
      return(<Route component={Component} {...otherProps} />);
    } else {
      return(<Redirect to="/login" />);
    }
}


const App = () => {

  const [globalState, setGlobalState] = useState({
    loggedIn: localStorage.getItem('jwt') ? true : false,
    user: null
  });


  useEffect(
    ()=>{
      
        console.log("This the loggedIn state", globalState.loggedIn)
    }, 
    [globalState.loggedIn]
  )

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LandingPage}/>
          <Route path="/login" exact={true} component={LoginPage}/>
          <Route path="/contactUs" exact={true} component={ContactUsPage}/>
          <Route path="/register" exact={true} component={UserRegistrationPage}/>
          <PrivateRoute path="/groups" exact={true} component={GroupsPage}/>
          <PrivateRoute path="/events" exact={true} component={EventsPage}/>
          <PrivateRoute path="/GroupRegistration" exact={true} component={GroupRegistration}/>
          <PrivateRoute path="/UpdateGroup" exact={true} component={UpdateGroup}/>
          <PrivateRoute path="/UpdateEvent" exact={true} component={UpdateEvent}/>
          <PrivateRoute path="/EventRegistration" exact={true} component={EventRegistration}/>
          <PrivateRoute path="/settings" exact={true} component={SettingsPage}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}


export default App;