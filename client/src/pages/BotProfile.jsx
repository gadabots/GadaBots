import React, { Component } from 'react';
//import './createGadaBot.css';
import CheckIn from '../components/CheckIn';
//import UpdateUser from './components/updateUser'
import CreateGadaBot from '../components/CreateGadaBot'
import testsBots from "./testBots.json";
//import UpdateUser from './components/modals/updateUsesr'

class App extends Component {

  state = {
    // will match pot with the botId here
    bot: testsBots[0],
  };

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
              <div class="card-body col-9">
                <div className="card-title"> <h1>{this.state.bot.name}</h1></div>
                <p><strong>Hometown: </strong>{this.state.bot.checkIns[0].location} </p>
                <p><strong>Created Date: </strong>{this.state.bot.checkIns[0].date} </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <ul class="list-group">
            {this.state.bot.checkIns.map(checkIn => (

              <li class="list-group-item">

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
