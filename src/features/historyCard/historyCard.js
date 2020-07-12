import React from 'react';
import {Card} from 'react-bootstrap'

export default function HistoryCard(props) {
    return (
        <Card data-aos="slide-left"
              className="col-3 c-bg-secondary c-text-primary c-history-card c-timeline-card col-3">
            <Card.Title className={`center c-history-card-title c-history-card-title-${props.historyType}`}>
                <span>
                    <p className={"c-history-role"}>{props.role.name}</p>
                    <p> className={"c-history-role-location"}>{props.role.location}</p>
            </span>

            </Card.Title>
            <Card.Body className={"c-gh-card-body content"}>
                <div className={"text-left-align"}>
                    <p>{props.description}</p>
                    <ul>
                        {props.workItems.map((work, index) => {
                            return (
                                <li key={`work-${props.name}-${index}`}>{work}</li>
                            )
                        })}
                    </ul>
                </div>
            </Card.Body>
        </Card>
    )
}