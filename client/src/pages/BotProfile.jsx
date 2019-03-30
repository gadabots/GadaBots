import React, { Component } from 'react';
//import './createGadaBot.css';
import CheckIn from '../components/CheckIn';
import FunFact from '../components/FunFact';
//import UpdateUser from './components/updateUser'
import CreateGadaBot from '../components/CreateGadaBot'
import testBots from "./testBots.json";
//import UpdateUser from './components/modals/updateUsesr'
import API from "../utils/API";


const wtf = require('wtf_wikipedia');

class App extends Component {

  state = {
    // will match pot with the botId here
    bot: testBots[0],
    sentence: {},
    location: testBots[0].location
  };

  componentDidMount() {
  //  console.log(this.props.auth)
    API.getBot("5c9d7e82d01e7028a025a3f7").then(res => { 
        this.setState(
          {bot: res.data,
          location: res.data.location
          });
    }).catch( error => console.log(error))
   
 }

  handleFactShow(city3) {

    // const city="New York City"; //works
    // const city2="Edmonds, Washington" //works
    // const city3="Arendal" //works
    
    wtf.fetch(city3).then(doc => {    
   
        doc.sentences(0).text();
        //concatenate or loop to tailor blurb length
        console.log(doc.sentences(0).text());


        this.setState({sentence: doc.sentences(0).text()})
    })
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
              <FunFact 
              pic={checkIn.pic}  
              location={checkIn.location}  
              date={checkIn.date}  
              journalEntry={checkIn.journalEntry} />
            ))}
          </ul>

        </div>

      </div>
    );
  }
}

export default App;
