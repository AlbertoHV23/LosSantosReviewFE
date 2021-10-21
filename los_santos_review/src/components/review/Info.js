import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "../common/Image"
import Logo from "../common/logo";
import Title from "../common/Title";
import Button from "@restart/ui/esm/Button";
import EditIcon from '@mui/icons-material/Edit';


function Info() {
    return (
        <>
        <Row>
            <Col xs={2} md={1}>
                <Title title="SUMMARY" class = "title info center"/>
            </Col>
            <Col xs={10} md={11}>
                <hr className = "line pad"/>
            </Col>
        </Row>

        <div>
            <div className="right">
                <Button className="comment-icon editable mb-3" href="/content-form"><EditIcon/> Edit Content</Button>
            </div>    
            <br/>
            <p>Five years after the events of The Last of Us, Ellie embarks on another journey through a 
            post-apocalyptic America on a mission of vengeance against a mysterious militia.</p>

            <br/>

            <Row>
                <Col xs={2} md={2} className="center subtitles">
                    <h2>Rating</h2> 
                    <h3>M</h3>
                </Col>
                <Col xs={5} md={5} className="center subtitles">
                    <h2>Genre</h2> 
                    <h3>Action | Adventure | Drama | Horror | Thriller</h3>
                </Col>
                <Col xs={5} md={5} className="center subtitles">
                    <h2>Director(s)</h2> 
                    <h3>Neil Druckmann, Kurt Margenau, Anthony Newman</h3>
                </Col>
            </Row>

            

            {/*
            <div className="inline">
                <h3>Rating : </h3> 
                <h3>M</h3>
            </div>

            <div className="inline">
                <h3>Genre : </h3> 
                <h3>Action | Adventure | Drama | Horror | Thriller</h3>
            </div>

            <div className="inline">
                <h3>Director(s) : </h3> 
                <h3>Neil Druckmann, Kurt Margenau, Anthony Newman</h3>
            </div>
            */}

        </div>

        <Row>
            <Col xs={2} md={3}>
                <Title title="LOS SANTOS REVIEW" class = "title "/>
            </Col>
            <Col xs={10} md={9}>
                <hr className = "line"/>
            </Col>
        </Row>

        <div>
            <div className="right">
                <Button className="comment-icon editable mb-3"  href="/review-form"><EditIcon/> Edit Review</Button>
            </div>    
            <br/>
            <p>Five years after the events of The Last of Us, Ellie embarks on another journey through a 
            post-apocalyptic America on a mission of vengeance against a mysterious militia.</p>

            <br/>


        </div>




        </>
     );
}

export default Info;