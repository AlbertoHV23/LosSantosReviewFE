import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";

function FormRole() {
    return (
        <>
        <Row>
            <Title title="Roles" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Role Name</Form.Label>
                      <Form.Control placeholder="Enter Role Name"></Form.Control>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Role Description</Form.Label>
                      <Form.Control  as="textarea" rows={3} placeholder="Enter Description..."></Form.Control>
                    </Form.Group>
                </Row>

                <div className="right">
                    <Button variant="primary" className="button submit margin" >SAVE</Button>
                    <Button variant="primary" className="button submit delete" >DELETE</Button>
                </div>
            </Form>
            </>
     );
}

export default FormRole;