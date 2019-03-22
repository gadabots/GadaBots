import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class CheckIn extends Component {

  state = {
    id: "",
    location: "",
    journal: "", 
    photo: ""
  };

onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let id = "1234..."
    //let c = ? //setts the value of the number of checkins. In the future the c will be equal to the number of checkins in the checkin array
    if (this.state.id != id) {
      alert("Please enter a valid id")
    } else if(!this.state.location) {
      alert("please update your GadaBots location")
    }

     else  {

      alert(`id: ${this.state.id}` )
      alert(`location: ${this.state.location}` )
      alert(`journal: ${this.state.journal}` )

      // router.post({
      //   name: this.state.name,
      //   //checkin[c].location: this.state.location,
      //   //checkin[c].jounal: this.state.jounal,
      //   //checkin[c].photo: this.state.photo
      // }) .then(
          this.setState({
                  id: "",
                  location: "",
                  journal: ""
                })
        // )  
        // .catch(err => console.log(err));
  
     
     }
  }
  render() {
    return (
       <div>
        <NavLink onClick={this.toggle} href='#'>
          Check In GadaBot
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a new Loction</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
              
              <form>
                <div className="form-group">
                  <label>Enter Your GaddaBot's ID</label>
                    <input className="form-control" 
                    id="gaddaBot-id"
                    placeholder="1234..."
                    name="id" 
                    value={this.state.name}  
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>
                    Where is your Gada-Bot now?
                  </label>
                    <input  
                    className="form-control" 
                    id="gaddaBot-location"
                    placeholder="your address here"
                    name="location"
                    value={this.state.location} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>
                    Write a Journal Entry for your GadaBot
                  </label>
                  <textarea  
                  className="form-control" 
                  id="journal" 
                  placeholder="Today we went to the park."
                  name="journal" 
                  value={this.state.journal} 
                  onChange={this.onChange}/>
                </div>
              <div className="form-group">
                <div className="custom-file">
                  <input type="file" 
                  className="custom-file-input" 
                  id="customFile" 
                  name="photo"/>
                  <label 
                  className="custom-file-label" 
                  name="photo" >Upload a Pic
                  </label>
                </div>
              </div>
                <button 
                type="submit" 
                className="btn btn-primary"
                onClick={this.onSubmit}
                >Check In</button>
              </form>

          </ModalBody>
        </Modal>
      </div>
               
    );
  }
}

const mapStateToProps = state => ({
 isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default UpdateUser
 connect(mapStateToProps, 
  { login, clearErrors })(LoginModal);
