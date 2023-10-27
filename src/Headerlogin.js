import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Headerlogin() {
  return (
    <div>
        
    <Navbar expand="lg" className="bg-body-tertiary navbar-main">
      <Container fluid>
        <Navbar.Brand href="#">
          <img  src="./media/1.png" alt="Logo" className='navbar-image'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll "className='nab' >
          <Nav className="navvvv"> {/* Use ml-auto to push Nav.Link items to the right */}
            <Nav.Link href="#action1" className='hover-line'>Home</Nav.Link>
            <Nav.Link href="#action1"  className='hover-line'>Product</Nav.Link>
            <Nav.Link href="#action1"  className='hover-line'>Sellers</Nav.Link>
            
            <Button variant="outline-success navbar-button"><Nav.Link href="/signup" className='navbar-button-text'>join the venture</Nav.Link></Button>
        
            
          </Nav>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
