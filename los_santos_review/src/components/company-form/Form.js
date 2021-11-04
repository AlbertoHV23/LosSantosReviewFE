import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
// import EditIcon from '@mui/icons-material/Edit';
import BootstrapDate from "../common/Date-Picker";
// import TimePicker from 'react-bootstrap-time-picker';
import Title from "../common/Title";

function FormCompany() {;
    return (
        <>

        <Row>
            <Title title="Company" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                
                <Row className="mb-3 mt-3">
                    
                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control placeholder="Enter Company Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>Company Logo</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Released Date</Form.Label>
                      <BootstrapDate/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Country</Form.Label>
                         <Form.Select defaultValue="Choose Content Company">
                            <option hidden selected>Choose Company Country</option>
                         </Form.Select>
                     </Form.Group>
                </Row>

                <div className="right">
                    <Button variant="primary" className="button submit margin" type="submit">SUBMIT</Button>
                    <Button variant="primary" className="button submit delete" type="submit">DELETE</Button>
                </div>
            </Form>
        </>
     );
}

export default FormCompany;