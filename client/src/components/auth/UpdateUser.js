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

class UpdateUser extends Component {
  state = {
    modal: false,
    email: '',
    username: "",
    currentPassword: "",
    newPassword: "",
    newPasswordCheck: "",
    photo: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

      switch(e.target.name) {
      case "userNameUpdate":
        // code block
        alert("New username: "+ this.state.username);
        break;
      case "passwordUpdate":
        // code block
      if (this.state.newPassword === this.state.newPasswordCheck){
        alert("New password: "+ this.state.newPassword);
      }
        break;
    case "photoUpdate":
        // code block
        alert("new photo submit clicked");
        break;
      default:
        // code block photoUpdate
    }
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          Update Profile
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update Profile</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
              
              <form>

                <div className="form-row align-items-center">
                  <div class="col-7">
                    <label>Change your Username</label>
                    <input className="form-control"
                      id="username-update"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange} />
                  </div>
                  <div className="col-auto">
                  <br />
                  <button
                  name="userNameUpdate"
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}>Update username</button>
                  </div>
                </div>
                <br />
                <div className="form-row align-items-center">
                 <div className="col-6">
                  <label>
                    Enter Your Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    name="currentPassword"
                    value={this.state.currentPassword}
                    onChange={this.handleInputChange} />
                    </div>

                <div className="col-6">
                  <label>
                    Enter a new Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handleInputChange} />
                </div>

                <div className="col-6">
                <label>
                    Re-enter your new Password
                    </label>
                  <input
                    className="form-control"
                    type="password"
                    id="currentPasswordCheck"
                    name="newPasswordCheck"
                    value={this.state.newPasswordCheck}
                    onChange={this.handleInputChange} />
                  </div>
               
                <div className="col-6">
                    <br />
                    <button
                    name="passwordUpdate"
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleFormSubmit}>Update Password</button>
                  </div>
               </div>
              <br />
              <div className="form-row">
              <div className="col-8">
                <div className="custom-file">
                  <input type="file"
                    className="custom-file-input"
                    id="customFile"
                    name="photo" />
                  <label
                    className="custom-file-label"
                    name="photo" >Upload a Profile Pic</label>
                </div>
                </div>
            
              <div className="col-4">
                <button
                  name="photoUpdate"
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >Update Picture </button>
              </div>
              </div>

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
connect(mapStateToProps, { login, clearErrors })(UpdateUser);
