import React from 'react';
import {Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavLink(props) {
    return (
        <div className={"c-nav-link"} >
        <Nav.Link className={"hvr-forward c-nav-link"} href={props.href}>
            <FontAwesomeIcon className={"nav-link-icon"} icon={props.icon} size={props.size||"lg"} />
            <p className={"nav-link-text center"}>{props.text}</p>
        </Nav.Link>
        </div>
    )
}