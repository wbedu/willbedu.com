import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { faStar, faLink, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
export default function GHProjectCard(props) {
    let text = props.text.substring(0, 200);
    if (text.length > 200) {
        text = text.substring(0, 196)
        text = text + "..."
    };

    let updateTime = moment(props.updated).fromNow()


    return (
        <Card data-aos="flip-up" className="col-lg-3 col-sm-9 col-md-5 c-bg-secondary c-text-primary c-gh-card" >
            <Card.Title className={"center c-gh-card-title"}>{props.title}</Card.Title>
            <Card.Body className={"c-gh-card-body"}>
                <div className={"c-gh-card-text text-left-align"}>
                    <p className=" mb-2 c-text-tertiary c-card-update-text">Last updated: {updateTime}</p>
                    {text}
                    <div className="c-gh-card-language-container">
                        {props.languages.map((language, index) => {
                            return <Button key={`project-language-${index}`} className="c-bg-secondary c-text-primary c-gh-card-language">#{language}</Button>
                        })}
                    </div>
                </div>
                <div className="c-gh-card-statbar">
                    <div className={"c-gh-card-icon-container"}>
                        <div className="c-gh-card-icon">
                            <FontAwesomeIcon icon={faStar} />
                            <p>{props.stars}</p>
                        </div>
                        <div className="c-gh-card-icon">
                            <FontAwesomeIcon icon={faEye} />
                            <p>{props.watchers}</p>
                        </div>
                        <Button href={props.link} className="c-gh-card-icon">
                            <FontAwesomeIcon icon={faLink} />
                            <p>View code</p>
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}