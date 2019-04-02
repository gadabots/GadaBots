import React, { Component } from "react";
import BotsOnMap from "../components/BotsOnMap/BotsOnMap";

import {
  Card,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  Button,
  CardBody
} from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div class="container row">
        <div class="card col-md-4">
          <div class="card-body">
            <h4 class="card-title">HOW TO USE OUR APP</h4>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>{" "}
        </div>
        <div class="col-8 col-md-8 col-sm-8 col-lg-8">
          <BotsOnMap />
        </div>
      </div>

      // <Container>
      //   <Row>
      //     <Col lg="2">
      //       <Card body inverse color="primary">
      //         <CardTitle>Special Title Treatment</CardTitle>
      //         <CardText>HOW TO USE OUR APP</CardText>
      //         {/* <Button>Go somewhere</Button> */}
      //       </Card>
      //     </Col>
      //     <Col lg="10">
      //       <Card body>
      //         <BotsOnMap />
      //       </Card>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default Home;
