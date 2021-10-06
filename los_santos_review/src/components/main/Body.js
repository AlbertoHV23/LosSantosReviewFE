import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "../common/Image"

function Body() {
    return (
        <>
          <Row xs={1} md={6} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  <Image className="logo" src= {`${process.env.PUBLIC_URL}/assets/img/LSRlogo.png`}/>
                </Card>
                <Card.Footer>
                  <small className="text-muted text">97%</small>
                </Card.Footer>
              </Col>
            ))}
          </Row>
        </>
     );
}

export default Body;