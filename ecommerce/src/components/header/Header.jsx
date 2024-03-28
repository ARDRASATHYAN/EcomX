import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './headerstyle.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className='mainheading' href="/">EcomX</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='heading' as={Link} to="/">Home</Nav.Link>
              <Nav.Link className='heading' as={Link} to='/cart'>Cart</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className='heading' as={Link} to="/alluser">All Users</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/logout">
                <button className='logout-btn'>Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header
