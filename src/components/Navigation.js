import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import {Navbar, Nav, Row, Col} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Navigation = () =>{
    return(
        <div>
            <Row className="navigation-flexbox">
                <Col sm={2} md={4} lg={6}><h2 className="logo">Weather<br />Hoven</h2></Col>
                {sessionStorage.getItem("Token") ?(
                (<Col sm={{ span: 4, offset: 6 }} md={{ span: 4, offset: 4 }} lg={{ span: 2, offset: 4 }} ><p className="sign-in p-3"><a href="/Signout">Sign out</a></p></Col>)
                ): (<Col sm={{ span: 4, offset: 6 }} md={{ span: 4, offset: 4 }} lg={{ span: 2, offset: 4 }} ><p className="sign-in p-3"><a href="/Register">Sign up</a></p></Col>)}
            </Row>
            <Navbar expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse name="navigation-bar">
                    <Nav className="navigation-bar mr-auto">
                        <Nav.Link className="navigation-bar-list"><Link to="/">Weather</Link></Nav.Link>
                        <Nav.Link className="navigation-bar-list"><Link to="/Weather-Maps">Maps</Link></Nav.Link>
                        <Nav.Link className="navigation-bar-list"><Link to="/News">News</Link></Nav.Link>
                        <Nav.Link className="navigation-bar-list"><Link to="/Photos">Photos</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;