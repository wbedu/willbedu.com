import React from 'react';
import '../styles/defaultPageStyle.css'
import { faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card } from 'react-bootstrap';
import './home.css'

export default function Home() {

    document.title = "WB| Home"

    return (
        <main style={{ display: "flex", justifyContent: "center" }}>

            <Card className="c-card col-lg-6 col-sm-10 col-md-10 center c-bg-secondary c-text-tertiary c-home-card">
                <h2>Will Bedu</h2>
                <p>Developer, Engineer, Architect</p>
                <div className="c-home-socials">
                    <Button className={"media-button"}
                        href="https://github.com/wbedu"
                        target="_blank">

                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Button>
                    <Button className={"media-button"}
                        href="https://www.linkedin.com/in/bwill2"
                        target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </Button>
                    <Button className={"media-button"}
                        href="mailto: me@willbedu.com"
                        target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </Button>
                </div>

            </Card>
        </main>
    )
}
