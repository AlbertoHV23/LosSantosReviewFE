import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Example from "../common/Example";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";

function Body() {
  const history = useHistory();


  function OpenReview(name) {
    window.localStorage.setItem(
      "contentUID",
      name
    );
    routeChange()

  }
  const routeChange = (ruta) => {
    let path = "review";
    history.push(path);
  };

  const getContents = (e) => {
    axios
      .get(`https://lossantos-api.herokuapp.com/api/content`)
      .then((res) => {
        window.localStorage.setItem(
          "content",
          JSON.stringify(res.data.contents)
        );

        // res.data.contents.forEach(element => {
        //   index++;
        //   //console.log(index)

        // Contents.push({
        //   title: element.title,
        //   description: element.description,
        //   realiseDate: element.realiseDate,
        //   trailerLink: element.trailerLink,
        //   duration: element.duration,
        //   category: element.category,
        //   subcategory: element.subcategory,
        //   image: element.image,
        //   uid: element.uid

        // });
        // })
      })
      .catch((err) => {
        const errorMsg = JSON.parse(err.request.response);

        if (errorMsg.errors != null) {
          errorMsg.errors.forEach((e) => {
            alert(e.msg);
          });
        } else {
          alert("Wrong email or password");
        }
      });
  };

  getContents();


  const CONTENT = JSON.parse(localStorage.getItem("content"));

  return (
    <>
      <Row xs={1} md={6} className="g-4">
        {CONTENT.map(function (d, idx) {
          return (
            <Col>
              <Card className="card" onClick={() => OpenReview(d.uid)}>
                <Example
                  source={d.image}
                />
              </Card>
              <Card.Footer className="text">
                <small className="text-muted">{d.title}</small>
              </Card.Footer>
            </Col>
          );
        })}
        {/* {Array.from({ length: 4}).map((_, idx) => (
          <Col>
            <Card className="card" onClick={routeChange}>
              <Example source={`${process.env.PUBLIC_URL}/assets/img/tlous.webp`} />
            </Card>
            <Card.Footer className="text">
              <small className="text-muted">0%</small>
            </Card.Footer>
          </Col>
        ))} */}
      </Row>
    </>
  );
}

export default Body;
