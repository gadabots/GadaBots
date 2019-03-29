import React, { Component } from 'react';
//import './createGadaBot.css';
import CheckIn from '../components/CheckIn';
//import UpdateUser from './components/updateUser'
import CreateGadaBot from '../components/CreateGadaBot'
import testsBots from "./testBots.json";
//import UpdateUser from './components/modals/updateUsesr'
import API from "../utils/API";
class App extends Component {

  
  state = {
    // will match pot with the botId here
    bot: testsBots[0],
  };

  componentDidMount() {
    API.getBot("5c9d70f94a3b0d6818a11bee").then(res => { 
        this.setState(
          {bot: res.data});
    }).catch( error => console.log(error))
}

  handleFactShow() {

    alert("the value of show ifact is: ")
  }

  render() {
    return (
      <div className="container">
        < CheckIn />
        < CreateGadaBot />
        <br />
        <br />
        <div alt="becauseItGotMad">
          <div className="card" key={this.state.bot.id}>
            <div className="row">
              <div className="col-3">
                <img className="card-img-top" src={this.state.bot.checkIns[0].pic}
                  alt={this.state.bot.name} />
              </div>
              <div className="card-body col-9">
                <div className="card-title"> <h1>{this.state.bot.name}</h1></div>
                <p><strong>Hometown: </strong>{this.state.bot.checkIns[0].location} </p>
                <p><strong>Created Date: </strong>{this.state.bot.checkIns[0].date} </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <ul className="list-group">
            {this.state.bot.checkIns.map(checkIn => (

              <li className="list-group-item">

                <div className="row">
                  <div className="col-3">
                    <img className="card-img-top" src={checkIn.pic}
                      alt={checkIn.location} />
                  </div>
                  <div className="col-9">
                    <div className="card-body">
                      <h4>{checkIn.location}</h4>
                      <p className="card-text"> {checkIn.journalEntry}</p>
                      <small>{checkIn.date}</small>
                    </div>
                  </div>

                </div>


              </li>

            ))}
          </ul>

        </div>

      </div>
    );
  }
}

export default App;
