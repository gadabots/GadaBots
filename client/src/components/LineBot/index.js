import React, { Component } from 'react';


class LineBot extends Component {

 constructor(props) {
    super(props);
    
        this.state = {
          show: this.props.submitted,
          bot_id: props.botId 
      };
    };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
      if (this.props.submitted === true) {
              this.setState({ show: true})
            }
  }
        
    
 handleClose() {
    this.setState({ show: false });
  }

  render() {
    console.log(this.props)
    return (
    <div>
     {this.state.show ?
      <div className="card">
      <div className="card-body">
      
        <img className="card-img-top" alt="Your New GadaBot" src="GadaBot.png" />
        <h2 className="card-title">Your New GadaBot</h2>
        <h5>Congrats! You grated a new GadaBot</h5>
          <p>Your GadaBots Traking ID is: {this.state.bot_id}</p>
          <p><strong> Write this on the bak of your Bot! </strong></p>
          </div>
          </div>
        
        :  <span></span> }
        </div>
    );
  }
}

export default LineBot;
  //  <button type="button" 
  //             className="btn btn-secondary" 
  //             onClick={this.handleClose}
  //             >Close</button>