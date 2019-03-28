import React, { Component } from "react";
import API from "../../utils/API";
import MapContainer from "../GoogleMap/GoogleMap";
import Geocode from "react-geocode";

class UserAndBot extends Component {
  //Setting a state for ver that will hold bots and places
  state = {
    saveBots: [],
    botPlaces: []
  };

  //API call to get all saved bots and store it on saveBots array
  getSavedBots = () => {
    API.getSavedBot()
      .then(res =>
        this.setState({
          saveBots: res.data
        })
      )
      .then(() => {
        let botCityAndId = this.state.saveBots.map(cityName => ({
          cityName: cityName.name,
          botsId: cityName._id
        }));
        Geocode.setApiKey("AIzaSyBAIKAtjZeY9SStYI_Dr7XDiALX17AkK0Y");

        Object.keys(botCityAndId).map(i => {
          return Geocode.fromAddress(botCityAndId[i].cityName).then(
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

export default UserAndBot;
