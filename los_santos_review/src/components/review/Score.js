import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "../common/Image"
import Logo from "../common/logo";
import Poster from "../common/Poster";
import Title from "../common/Title";
import EmbedsPage from "./EmbedsPage";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RecommendIcon from '@mui/icons-material/Recommend';

function Score() {
    return (
        <>
        <Row className="preview">
            <Col xs={1} md={3} className="d-none d-md-block">
                <Poster  class="poster"/>
            </Col>
            <Col xs={12} md={9}>
                    <iframe className="embed-responsive-item video" src="https://www.youtube.com/embed/AN3jEjjcZ-k" allowfullscreen></iframe>
            </Col>
        </Row>

        <Row>
            <div className="center">
                <Title title="GOD OF WAR 4" class = "review-title center"/>
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