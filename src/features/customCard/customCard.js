import React from 'react';
import './customCard.css'
import { Card } from 'react-bootstrap';
export default function CustomCard({children}) {
    return (
        <Card className="customCard" >
            {children}
        </Card>
    )
}