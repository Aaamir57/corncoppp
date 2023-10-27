import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export default function Header() {
    return (
        <div>
            {/* 
            <nav class="navbar navbar-main navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <img alt=' '  src="./media/1.png" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active hover hover-line" aria-current="page" href="#">Home</a>
                            </li><li class="nav-item">
                                <a class="nav-link active hover hover-line" aria-current="page" href="#">Product</a>
                            </li><li class="nav-item">
                                <a class="nav-link active active-hover hover-line" aria-current="page" href="#">Sellers</a>
                            </li>

                            <button class="navbar-button"> <a href="">Login</a> </button>
                        </ul>

                    </div>
                </div>
            </nav> */}




    <Navbar expand="lg" className="bg-body-tertiary navbar-main">
      <Container fluid>
        <Navbar.Brand href="#">
          <img alt=' '  src="./media/1.png"  className='navbar-image'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='toggle'/>
        <Navbar.Collapse id="navbarScroll" className='nab ' >
          <Nav className="navvvv "> {/* Use ml-auto to push Nav.Link items to the right */}
            <Nav.Link href="#action1" className='hover-line'>Home</Nav.Link>
            <Nav.Link href="#action1"  className='hover-line'>Product</Nav.Link>
            <Nav.Link href="#action1"  className='hover-line'>Sellers</Nav.Link>
            <Button variant="outline-success navbar-button" className='navbar-button'><Nav.Link href="/login" className='navbar-button-text'>Login</Nav.Link></Button>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>




            {/* <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#home" >Facebook</Navbar.Brand>
                <Nav className="me-auto navbar-wraper">


                                <Link to="/post">Post</Link>
                                <Link to="/">Home</Link>

                                <Link to={`/profile`} >Profile</Link>
                                <Link to={`/followerslist`} >List of followers</Link>



                                <Link to="/search">Search</Link>
                            

                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            
                    






                </Nav>
               


            </Navbar> */}

        </div>
    )
}
