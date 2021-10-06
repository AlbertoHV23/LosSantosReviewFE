import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Legend from "../common/Legend";
import Title from "../common/Title";


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
                            <h5>Critic Submisiion</h5>
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
                    <Title title="JOIN THE NEWSLETTER" class = "title"/>
                    <Legend title="Get the freshest reviews, news, and more delivered right to your inbox" className = "legend"/>
                    <Button variant="info">JOIN</Button>{' '}
                  </Col>
                  <Col>
                    <Title title="FOLLOW US" class = "title"/>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Copyright © Los Santos. All rights reserved.</h6>
                  </Col>
                  <Col>
                    <h6>Privacy Policy,Terms & Policies, AdChoices</h6>
                  </Col>
                </Row>

            </Container>
        </>
     );
}

export default Footer;