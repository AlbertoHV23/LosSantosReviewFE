import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Example from "../common/Example";

function Body() {
    return (
        <>
          <Row xs={1} md={6} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card  className="card">
                  <Example/>
                </Card>
                <Card.Footer className="text2">
                  <small className="text-muted">The Last of Us</small>
                </Card.Footer>
              </Col>
            ))}
          </Row>
        </>
     );
}

export default Body;