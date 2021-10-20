import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "../common/Image"
import Logo from "../common/logo";
import Title from "../common/Title";
import Button from "@mui/material/Button";
import { Card } from "react-bootstrap";
import Profile from "../common/Profile";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Critics() {
    return (
        <>
        <Row>
            <Col xs={2} md={2}>
                <Title title="CRITIC REVIEW" class = "title"/>
            </Col>
            <Col xs={10} md={10}>
                <hr className = "line"/>
            </Col>
        </Row>

        <Row>
            <Col>
              <div className="filter">
                  <a href="#">
                      <h6>All</h6>
                  </a>
                  <a href="#">
                      <h6>Top Critics</h6>
                  </a>
                  <a href="#">
                      <h6>Fresh</h6>
                  </a>
              </div>
            </Col>
            <Col>
                <div className="right">
                <Button variant="primary" className="button-comment">COMMENT</Button>{' '}
                <Button variant="primary" className="button-rate">RATE</Button>{' '}
                </div>
            </Col>
        </Row>

        {Array.from({ length: 3 }).map((_, idx) => (
            <Row>
                <Col xs={1} md={1}>
                </Col>
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col xs={12} md={5}>
                        <Card className="mb-4 mt-4 comment">
                            <Card.Header className="d-flex">
                                <div className="pic">
                                    <Profile/>
                                </div>
                                <div>
                                    <h3 className="user">Gordon Ramsay</h3>
                                    <h3>Owner of Creative Ltd.</h3>
                                </div>
                            </Card.Header>
                            <Card.Body>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                              </Card.Text>
                              <Card.Text className="center">
                                Score: 77%
                              </Card.Text>
                              <div className="right">
                                <Button className="comment-icon"><EditIcon/></Button>
                                <Button className="comment-icon"><DeleteIcon/></Button>
                              </div>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        ))}

        </>
     );
}

export default Critics;