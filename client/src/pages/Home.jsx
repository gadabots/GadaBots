import React, { Component } from "react";
import Map from "../components/GoogleMap/GoogleMap"

import {
  Card,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container className="m-2">
        <Row>
          <Col lg="3">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
                With supporting text below as a natural lead-in to additional
                content.
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col lg="8">
            <Card body>
              <Map />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
