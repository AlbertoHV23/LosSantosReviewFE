import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import EditIcon from '@mui/icons-material/Edit';
import BootstrapDate from "../common/Date-Picker";
import TimePicker from 'react-bootstrap-time-picker';
import Title from "../common/Title";

function FormContent() {;
    return (
        <>

        <Row>
            <Title title="Entertainment" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                <Row className="mb-3 mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Content</Form.Label>
                      <Form.Control placeholder="Title"></Form.Control>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mt-3">
                     
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Select defaultValue="Choose Content Category">
                        <option hidden selected>Choose Content Category</option>
                        </Form.Select>
                        <div className="right mt-1">
                            <Button className="comment-icon editable"><EditIcon/> Edit Category</Button>
                        </div>    
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Select defaultValue="Choose Content Subcategory">
                        <option hidden selected>Choose Content Subcategory</option>
                        </Form.Select>
                        <div className="right mt-1">
                            <Button className="comment-icon editable"><EditIcon/> Edit SubCategory</Button>
                        </div> 
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                     
                     <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Classification</Form.Label>
                         <Form.Select defaultValue="Choose Content Classification">
                            <option hidden selected>Choose Content Classification</option>
                         </Form.Select>
                         <div className="right mt-1">
                             <Button className="comment-icon editable"><EditIcon/> Edit Classification</Button>
                         </div>    
                     </Form.Group>
 
                     <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Company</Form.Label>
                         <Form.Select defaultValue="Choose Content Company">
                            <option hidden selected>Choose Content Company</option>
                         </Form.Select>
                         <div className="right mt-1">
                             <Button className="comment-icon editable"><EditIcon/> Edit Company</Button>
                         </div> 
                     </Form.Group>
                 </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Realesed Date</Form.Label>
                      <BootstrapDate/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Duration</Form.Label>
                      <Form.Control  type="number" placeholder="Enter minutes total" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>Poster</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Trailer Link</Form.Label>
                      <Form.Control placeholder="Enter link" />
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

export default FormContent;