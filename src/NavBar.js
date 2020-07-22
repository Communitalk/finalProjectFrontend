import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import Navbar2 from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo1.png'

const NavBar = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        );

        localStorage.clear();
    }

    return (
        <nav className="navbar navbar-dark " style={{backgroundColor : ' #ffffff'}}>
           <a className="navbar-brand" href="/">
            <img src={logo} width="50" height="35" class="d-inline-block align-top" alt="" loading="lazy"/>
            <p style={{color: "black"}} class="d-inline-block align-top" ></p>
          </a>
            <Navbar2  expand="lg">
            <Navbar2.Toggle aria-controls="basic-navbar-nav" />
            <Navbar2.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/" style={{color: "black"} }>Home</Nav.Link>
                <Nav.Link href="/groups" style={{color: "black"}}>Feeds</Nav.Link>
                <Nav.Link href="/events" style={{color: "black"}}>Events</Nav.Link>
                <Nav.Link href="/contactUs"style={{color: "black"}}>Contact Us</Nav.Link>
                </Nav>
            </Navbar2.Collapse>
            </Navbar2>

            <div style={{display: 'flex'}}>
                {
                    globalState.loggedIn === false && 
                    <Link
                    to="/login"
                    className="btn btn-primary" style={{color: "white"}}>
                        Login
                    </Link>
                }

                {
                    globalState.loggedIn === true && 
                    <button onClick={logOut}
                    className="btn btn-primary" style={{color: "white"}}>
                        Logout
                    </button>
                }
            </div>
        </nav>
    )
}

export default NavBar;