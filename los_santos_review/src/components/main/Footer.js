import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import Legend from "../common/Legend";
import Title from "../common/Title";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
                    <h3> Get the freshest reviews, news, and more delivered right to your inbox </h3>
                    <Button variant="primary" className="button">JOIN</Button>{' '}
                  </Col>
                  <Col>
                    <Title title="FOLLOW US" class = "title-footer"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Copyright © Los Santos. All rights reserved.</h6>
                  </Col>
                  <Col>
                    <h6 className="end">Privacy Policy,Terms & Policies, AdChoices</h6>
                  </Col>
                </Row>

            </Container>
        </>
     );
}

export default Footer;