import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Navigation = () =>{
    return(
     <div>
         <div className="navigation-flexbox">
             <h2 className="logo">Weather<br/>Hoven</h2>
         </div>
         <Navbar expand="lg">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse name="navigation-bar">
         <Nav  className="navigation-bar mr-auto">
           <Nav.Link className="navigation-bar-list"><Link to="/">Weather</Link></Nav.Link>
           <Nav.Link className="navigation-bar-list"><Link to="/News">News</Link></Nav.Link>
           <Nav.Link className="navigation-bar-list"><Link to="/Photos">Photos</Link></Nav.Link>
           <Nav.Link className="navigation-bar-list"><Link to="/Forum"><strike>Forum</strike></Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
         </Navbar>
     </div>
    )
}

export default Navigation;