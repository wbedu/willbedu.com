import React from 'react';
import {Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./navlink.css"
export default function NavLink(props) {
    return (
        <Nav.Link href={props.href}>
            <FontAwesomeIcon icon={props.icon} size={props.size|"lg"} />
            <p >{props.text}</p>
        </Nav.Link>
    )
}