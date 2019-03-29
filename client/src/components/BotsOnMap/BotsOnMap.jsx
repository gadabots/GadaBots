import React, { Component } from "react";
import API from "../../utils/API";
import MapContainer from "../GoogleMap/GoogleMap";
import Geocode from "react-geocode";

class BotsOnMap extends Component {
  //Setting a state for ver that will hold bots and places
  state = {
    saveBots: [ ],
    botPlaces: []
  };

  // API call to get all saved bots and store it on saveBots array
  getSavedBots = () => {
    API.getSavedBot()
      .then(res =>
        this.setState({
          saveBots: res.data
        })
      )
      .then(() => {
        let botCityAndId = this.state.saveBots.map(city => ({
          botsId: city.checkIns.map(checkin => checkin._id),
          location: city.checkIns.map(checkin => checkin.location)
        }));
        Geocode.setApiKey("AIzaSyBAIKAtjZeY9SStYI_Dr7XDiALX17AkK0Y");

        console.log(botCityAndId.botsId)

        Object.keys(botCityAndId).map(i => {
          return Geocode.fromAddress(botCityAndId[i].location).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
              this.setState({
                botPlaces: this.state.botPlaces.concat({
                  _id: botCityAndId[i].botsId,
                  lat: lat,
                  lng: lng
                })
              });
            },
            error => {
              console.error(error);
            }
          );
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getSavedBots();
  }

  render() {
    return (
      <div>
        <MapContainer
          botPlaces={this.state.botPlaces}
          saveBots={this.state.saveBots}
        />
      </div>
    );
  }
}

export default BotsOnMap;
