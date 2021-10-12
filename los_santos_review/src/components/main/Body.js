import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "../common/Image"
import Logo from "../common/logo";
import Example from "../common/Example";
import Button from "@restart/ui/esm/Button";
import { useHistory } from "react-router-dom";

function Body() {
  const history = useHistory();
  const routeChange = (ruta) => {
  let path = 'review';
  history.push(path);
  };
    return (
        <>
          <Row xs={1} md={6} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card  className="card" onClick={routeChange}>
                  <Example/>
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