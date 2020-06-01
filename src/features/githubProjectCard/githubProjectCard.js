import React from 'react';
import { Card } from 'react-bootstrap'
import { faStar, faLink, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function GHProjectCard(props) {
    let text = props.text.substring(0, 200);
    if (text.length > 200) {
        text = text.substring(0, 196)
        text = text + "..."
    };


    return (
        <Card data-aos="flip-up" className="col-lg-3 col-sm-9 col-md-5 c-bg-secondary c-text-primary c-gh-card" >
            <Card.Title className={"center c-gh-card-title"}>{props.title}</Card.Title>
            <Card.Body className={"c-gh-card-body"}>
                <div className={"c-gh-card-text text-left-align"}>
                    {text}
                </div>
                <div className="c-gh-card-statbar">
                    <div className={"gh-card-icon-container"}>
                        <div className="c-gh-card-icon">
                            <FontAwesomeIcon icon={faStar} />
                            <p>{props.stars}</p>
                        </div>
                        <div className="c-gh-card-icon">
                            <FontAwesomeIcon icon={faEye} />
                            <p>{props.watchers}</p>
                        </div>
                        <div className="c-gh-card-icon">
                            <FontAwesomeIcon icon={faLink} />
                            <a href={props.link}><p>see more</p></a>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}