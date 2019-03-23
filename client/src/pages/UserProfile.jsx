import React, { Component } from 'react';
import {
    Card,
    Container,
    Row,
    Col,
    CardTitle,
    CardText,
    CardImg,
    CardBody,
    Button
} from "reactstrap";

class userProfile extends Component {
    state = {}
    render() {
        return (

            <Container><br />
                <center><h1>Welcome (username here)!</h1>
                    <button className="btn btn-dark">&nbsp;Create a GadaBot&nbsp;</button>
                    <button className="btn btn-dark">Check in a Gadabot</button><br /><br />
                </center>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle><h5>Your Info</h5></CardTitle>
                                <CardText>User Name: git )</CardText>
                                <CardText>Email: (Email address here)</CardText>
                                <button className="btn btn-dark">Update Your Info</button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="8">
                        <Card body>
                            <CardTitle><h4>Your GadaBot(s)</h4></CardTitle>
                            <CardText>
                                <ul>
                                    <li>(Thumbnail of Bot Here)(Name of GadaBot Here)<button className="btn btn-dark-xs">View Bot</button></li>
                                    <li>(Thumbnail of Bot Here)(Name of GadaBot Here)<button className="btn btn-dark-xs">View Bot</button></li>
                                    <li>(Thumbnail of Bot Here)(Name of GadaBot Here)<button className="btn btn-dark-xs">View Bot</button></li>
                                </ul>
                            </CardText>

                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default userProfile;