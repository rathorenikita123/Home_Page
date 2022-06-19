import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Navbar.css';


const Navigation = () => {
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Business</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#register">Rgister</Nav.Link>
                            <Nav.Link href="#contact">Contact-Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;