import React from 'react';
import '../styles/defaultPageStyle.css'
import CustomCard from '../features/customCard/customCard';
import Colors from "../styles/colors"
import { faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
import './home.css'

export default class Home extends React.Component {
    componentDidMount() {
        document.title = "WB| Home"
    }
    render() {
        return (
            <main style={{ display: "flex", justifyContent: "center" }}>
                <CustomCard className="col-lg-6 col-sm-10 col-md-10 center" style={{ padding: "10px", top: "50px", height: "350px", color: Colors.primary }}>
                    <h2>Will Bedu</h2>
                    <p>Developer, Engineer, Architect</p>
                    <div className="socials">
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

                </CustomCard>
            </main>
        )
    }
}