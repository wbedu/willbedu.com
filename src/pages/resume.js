import React from 'react';
import '../styles/defaultPageStyle.css'
import './resume.css'
import {Card} from "react-bootstrap";
import HistoryCard from "../features/historyCard/historyCard";

export default function Resume() {
    document.title = "WB| Resume"


    const mockHistory = [
        {
            role: {
                name: "role1",
                location: "company1"
            },
            historyType: "type2",
            description: "I did stuff",
            workItems: ["stuff1", "stuff2", "stuff3", "stuff4"]

        },
        {
            role: {
                name: "role1",
                location: "company1"
            },
            historyType: "type2",
            description: "I did stuff",
            workItems: ["stuff1", "stuff2", "stuff3", "stuff4"]

        },
        {
            role: {
                name: "role1",
                location: "company1"
            },
            historyType: "type2",
            description: "I did stuff",
            workItems: ["stuff1", "stuff2", "stuff3", "stuff4"]

        },
        {
            role: {
                name: "role1",
                location: "company1"
            },
            historyType: "type2",
            description: "I did stuff",
            workItems: ["stuff1", "stuff2", "stuff3", "stuff4"]

        }
    ]

    return (
        <main>
            <h1>Resume</h1>
            <p>
                Working on this page. Check back soon
            </p>
            <div className="c-timeline col-12">
                {/*{
                    mockHistory.map((history, index) => {
                        return (
                            <HistoryCard{...history}> </HistoryCard>
                        )
                    })
                }
                <Card className="c-timeline-card col-3">
                    <div className="content">
                        <h2>2017</h2>
                        <p>Lorem ipsum..</p>
                    </div>
                </Card>*/}
            </div>
        </main>
    )
}
