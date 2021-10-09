import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import Legend from "../common/Legend";
import Title from "../common/Title";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <>
            <Container>
                <hr className = "line"/>
                <Row>
                  <Col>
                    <li>
                        <a href="#">
                            <h5>Help</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h5>About Los Santos</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h5>What's the Santos Certifictae?</h5>
                        </a>
                    </li>
                  </Col>
                  <Col>
                    <li>
                        <a href="#">
                            <h5>Critic Submission</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h5>Licensing</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h5>Advertise</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h5>Carrers</h5>
                        </a>
                    </li>
                  </Col>
                  <Col>
                    <div class="join">
                        <MailOutlineIcon className="email"/>
                        <Title title="JOIN THE NEWSLETTER" class = "title-footer"/> 
                    </div>
                    <div className="center"> 
                        <h3> Get the freshest reviews, news, and more delivered right to your inbox </h3>
                        <Button variant="primary" className="button">JOIN</Button>{' '}
                    </div>
                  </Col>
                  <Col>
                    <div className="center">
                        <Title title="FOLLOW US" class = "title-footer"/>
                        <Button className="footer-icon"><FacebookIcon/></Button>
                        <Button className="footer-icon"><TwitterIcon/></Button>
                        <Button className="footer-icon"><InstagramIcon/></Button>
                        <Button className="footer-icon"><YouTubeIcon/></Button> 
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Copyright © Los Santos. All rights reserved.</h6>
                  </Col>
                  <Col>
                    <div className="end">
                        <a href="#">
                            <h6>Privacy Policy</h6>
                        </a>
                        <a href="#">
                            <h6>Terms & Policies</h6>
                        </a>
                        <a href="#">
                            <h6>AdChoices</h6>
                        </a>
                    </div>
                  </Col>
                </Row>

            </Container>
        </>
     );
}

export default Footer;