import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar bg='light' expand='md'>
            <Navbar.Brand href='/'>Arrowhead Towing Service</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/services'>Services</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
