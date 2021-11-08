import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";



function FormCategory() {
    return (
        <>

        <Row>
            <Title title="Category" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Name</Form.Label>
                      <Form.Control placeholder="Enter Category Name"></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" type="submit">SAVE</Button>
                    <Button variant="primary" className="button submit delete" type="submit">DELETE</Button>
                </div>
            </Form>

        <Row>
            <Title title="Subcategory" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Category</Form.Label>
                      <Form.Select defaultValue="Choose Content to Review">
                      <option hidden selected>Choose Category</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Subcategory Name</Form.Label>
                      <Form.Control placeholder="Enter SubCategory Name"></Form.Control>
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" type="submit">SAVE</Button>
                    <Button variant="primary" className="button submit delete" type="submit">DELETE</Button>
                </div>
            </Form>

        <Row>
            <Title title="Classification" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3"> 
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Classification Name</Form.Label>
                      <Form.Control placeholder="Enter Classification Name"></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>
                

                <div className="right">
                    <Button variant="primary" className="button submit margin" type="submit">SAVE</Button>
                    <Button variant="primary" className="button submit delete" type="submit">DELETE</Button>
                </div>
            </Form>
        </>
     );
}

export default FormCategory;