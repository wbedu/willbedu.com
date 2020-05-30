import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { faIdCard, faCode, faBlog, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import NavLink from './navLink/navLink'
import './mainNav.css'
import  "hover.css"

export default function MainNav() {
    return (
        <div>
            <Navbar className={"gradientNav shortNav"} expand="lg">
                <Navbar.Brand className={"secondary-color"} href="/#">
                    <div>WILL</div>
                    <div>BEDU</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={"short-nav-toggle"}>
                    <Nav className="mr-auto">
                        <Nav.Link className={"gradientNavLink navbar-link"} href="/">Home</Nav.Link>
                        <Nav.Link className={"gradientNavLink navbar-link"} href="/projects">Projects</Nav.Link>
                        <Nav.Link className={"gradientNavLink navbar-link"} href="/blog">Blog</Nav.Link>
                        <Nav.Link className={"gradientNavLink navbar-link"} href="/blog">Resume</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Nav defaultActiveKey="/home" className="flex-column fullNav sidenav">
                <div className="brand-link"><p>WILL</p><p>BEDU</p></div>
                <NavLink href="/" icon={faIdCard} size="lg" text="Home" />
                <div
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <NavLink href="/projects" icon={faCode} size="lg" text="Projects" />
                <div
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <NavLink href="/blog" icon={faBlog} size="lg" text="Blog" />
                <div
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <NavLink href="/resume" icon={faCodeBranch} size="lg" text="Resume" />
            </Nav>
        </div>
    )
}