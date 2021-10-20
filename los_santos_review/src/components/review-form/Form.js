import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import SliderBar from "../common/Slider";
import EditIcon from '@mui/icons-material/Edit';

function FormReview() {;
    return (
        <>
            <Form>
                <Row className="mb-3 mt-3">

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Content</Form.Label>
                      <Form.Select defaultValue="Choose Content to Review">
                        <option>The last of us  II</option>
                        <option>God Of War</option>
                      </Form.Select>
                        <div className="right mt-1">
                            <Button className="comment-icon editable"><EditIcon/> Edit Content</Button>
                        </div> 
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mt-3">
                     
                    <Form.Group as={Col} controlId="formGridState">
                        <fieldset disabled>
                        <Form.Label>Category</Form.Label>
                        <Form.Control defaultValue="Content Category"></Form.Control>
                        <div className="right mt-1">
                            <Button className="comment-icon editable"><EditIcon/> Edit Category</Button>
                        </div>    
                        </fieldset>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <fieldset disabled>
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Control defaultValue="Content Subcategory"/>
                        <div className="right mt-1">
                            <Button className="comment-icon editable"><EditIcon/> Edit SubCategory</Button>
                        </div> 
                        </fieldset>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                     
                     <Form.Group as={Col} controlId="formGridState">
                         <fieldset disabled>
                         <Form.Label>Classification</Form.Label>
                         <Form.Control defaultValue="Content Classification"></Form.Control>
                         <div className="right mt-1">
                             <Button className="comment-icon editable"><EditIcon/> Edit Classification</Button>
                         </div>    
                         </fieldset>
                     </Form.Group>
 
                     <Form.Group as={Col} controlId="formGridState">
                         <fieldset disabled>
                         <Form.Label>Company</Form.Label>
                         <Form.Control defaultValue="Content Company"/>
                         <div className="right mt-1">
                             <Button className="comment-icon editable"><EditIcon/> Edit Company</Button>
                         </div> 
                         </fieldset>
                     </Form.Group>
                 </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control placeholder="Enter Review Tiltle" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Subtitle</Form.Label>
                      <Form.Control placeholder="Enter Review Subtitle" />
                    </Form.Group>
                </Row>

            
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Los Santos Review</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Label>Rating</Form.Label>
                <SliderBar/>

                <div className="right">
                    <Button variant="primary" className="button submit" type="submit">SUBMIT</Button>
                </div>
            </Form>
        </>
     );
}

export default FormReview;