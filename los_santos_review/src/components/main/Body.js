import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "../common/Image"
import Logo from "../common/logo";

function Body() {
    return (
        <>
          <Row xs={1} md={6} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card  className="card">
                  <Logo/>
                </Card>
                <Card.Footer className="text">
                  <small className="text-muted">0%</small>
                </Card.Footer>
              </Col>
            ))}
          </Row>
        </>
     );
}

export default Body;