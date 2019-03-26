import React, { Component } from 'react';
import CheckIn from "../components/CheckIn";
import UpdateUser from "../components/UpdateUser";
import CreateGadaBot from "../components/CreateGadaBot";
import testsBots from "./testBots.json";
import {
  Container
  } from 'reactstrap';  
  
  class BotProfile extends Component {
  
    state = {
  // will match pot with the botId here
  bot: testsBots
 };

    render() {
      return (
          <Container>
           < CheckIn />
           <UpdateUser />
           <CreateGadaBot />
          <br />
          <br />
       {this.state.bot.map(bot => (
      <div alt="becauseItGotMad">
              <div className="card" key={bot.id}>
               <div className="row">
                  <div className="col-3">
                    <img className="card-img-top" src={bot.checkIns[0].pic}
                      alt={bot.name} />
                  </div>
                  
               <div class="card-body col-9">
                <div className="card-title"> <h1>{bot.name}</h1></div>
                <p><strong>Hometown: </strong>{bot.checkIns[0].location} </p>
                <p><strong>Created Date: </strong>{bot.checkIns[0].date} </p>
                </div>
                </div>
                </div>
                <ul class="list-group">
               {bot.checkIns.map(checkIn=> (

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
                    </div>
                  </div>
                
                </div>
               
            </li>
            ))}
            </ul>
     
        </div>
          ))}
        </Container>
      );
    }
  }
  
  export default BotProfile;
