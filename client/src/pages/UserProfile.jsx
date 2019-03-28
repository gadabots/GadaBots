import React, { Component } from 'react';
import CheckIn from "../components/CheckIn";
import UpdateUser from "../components/UpdateUser";
import CreateGadaBot from "../components/CreateGadaBot";

import {
    Card,
    Container,
    Row,
    Col,
    CardTitle,
    CardText,
    CardImg,
    CardBody
} from "reactstrap";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserProfile extends Component {
    state = {};

    static propTypes = {
        auth: PropTypes.object.isRequired
      };
    
    render() {
        // console.log(this.props.auth);
        const { user } = this.props.auth;

        // Don't render until the user is available
        if (!user) {
            return <div />
        }

        return (

         <Container>
         <CheckIn />
         <UpdateUser user={user}/>
         <CreateGadaBot />
            <br />
            
                <center><h1>{`Welcome ${user.name}`}!</h1>
                    <button className="btn btn-dark">&nbsp;Create a GadaBot&nbsp;</button>
                    <button className="btn btn-dark">Check in a Gadabot</button><br /><br />
                </center>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle><h5>Your Info</h5></CardTitle>
                                <CardText>Name: {user.name}</CardText>
                                <CardText>Email: {user.email}</CardText>
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

const mapStateToProps = state => ({
    auth: state.auth
  });  

export default connect(mapStateToProps, null)(UserProfile);