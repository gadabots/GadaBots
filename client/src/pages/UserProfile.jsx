import React, { Component } from 'react';
import CheckIn from "../components/CheckIn";
import UpdateUser from "../components/UpdateUser";
import CreateGadaBot from "../components/CreateGadaBot";
import {
  Container
 } from 'reactstrap';


class UserProfile extends Component {
    

    render() {
      return (
        <Container >
         <p>Some text</p>
         < CheckIn />
         <UpdateUser />
         <CreateGadaBot />
         </Container>

      );
    }
  }
  
 
export default UserProfile;