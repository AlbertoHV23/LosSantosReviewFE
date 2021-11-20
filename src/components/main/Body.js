import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import Image from "../common/Image"
// import Logo from "../common/logo";
import Example from "../common/Example";
// import Button from "@restart/ui/esm/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Body() {
  const history = useHistory();
  const routeChange = (ruta) => {
  let path = 'review';
  history.push(path);};

  let Contents = []
  var index = 0;
  const getContents = (e) =>{
    axios.get(`https://lossantos-api.herokuapp.com/api/content`)
    .then(res => {
    var myJsonString = JSON.stringify(Contents);

      res.data.contents.forEach(element => {
        index++;
        //console.log(index)

        Contents.push({
          title: element.title,
          description: element.description,
          realiseDate: element.realiseDate,
          trailerLink: element.trailerLink,
          duration: element.duration,
          category: element.category,
          subcategory: element.subcategory,
          image: element.image,
          uid: element.uid
          
        });
      })
      
    })
    .catch(err => {
      const errorMsg =JSON.parse(err.request.response) ;

      if(errorMsg.errors != null){
        errorMsg.errors.forEach(e => {
      
          alert(e.msg);
  
        });
      }
      else{
        alert("Wrong email or password")
      }


    })
  }
  getContents();




    return (
        <>
          <Row xs={1} md={6} className="g-4">
          
            {Array.from({ length: Contents.length}).map((_, idx) => (
              <Col>
                <Card  className="card" onClick={routeChange}>
                  <Example source= {`${process.env.PUBLIC_URL}/assets/img/tlous.webp`} />
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