import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './mainNav.css'

export default function MainNav() {
    return (
        <Navbar className={"gradientNav"} expand="lg">
            <Navbar.Brand className={"shortNav"} href="#home">WB</Navbar.Brand>
            <Navbar.Brand className={"fullNav"} href="#home">Will Bedu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className={"gradientNavLink"} href="/">Home</Nav.Link>
                    <Nav.Link className={"gradientNavLink"} href="/projects">Projects</Nav.Link>
                    <Nav.Link className={"gradientNavLink"} href="/blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}