import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Poster from "../common/Poster";
import Title from "../common/Title";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RecommendIcon from '@mui/icons-material/Recommend';

function Score() {
    const content = localStorage.getItem("contentUID")
    const contents = JSON.parse(localStorage.getItem("content"));
    let Selectedcontent;

    contents.forEach(element => {
        if(element.uid == content){
            Selectedcontent = element;
        }
    });

    
    return (
        <>
        <Row className="preview">
            <Col xs={1} md={3} className="d-none d-md-block">
                <Poster  class="poster" source = {Selectedcontent.image }/>
            </Col>
            <Col xs={12} md={9}>
                    <iframe title="Trailer" className="embed-responsive-item video" src={Selectedcontent.trailerLink} allowfullscreen></iframe>
            </Col>
        </Row>

        <Row>
            <div className="center">
                <Title title={Selectedcontent.title} class = "review-title center"/>
            </div>
            <Col>
                <div className="center">                        
                    <div className="items"> 
                        <TrackChangesIcon/>
                        <Title title="95%" class = "title title-score"/>  
                    </div> 
                    <h3>Los Santos Score</h3>
                </div>
            </Col>
            <Col>
                <div className="center">
                    <div className="items"> 
                        <RecommendIcon/>
                        <Title title="78%" class = "title title-score"/>
                    </div>
                    <h3>Audience Score</h3>
                </div>

            </Col>
        </Row>

        </>
     );
}

export default Score;