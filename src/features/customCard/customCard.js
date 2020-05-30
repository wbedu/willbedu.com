import React from 'react';
import './customCard.css'
import { Card } from 'react-bootstrap';
export default function CustomCard(props) {
    return (
        <Card className={"customCard " + props.className} style={props.style}>
            {props.children}
        </Card>
    )
}