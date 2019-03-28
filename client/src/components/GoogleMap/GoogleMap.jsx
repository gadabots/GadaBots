import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Container } from "reactstrap";
// import API from "../../utils/API";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      activeMarkerId : ""
    };
  }

  //function when user click one of the marker
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    //to allow user close the marker and will trun show to false
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  createMarker = () =>
    this.props.botPlaces.map(bots => (
      <Marker
        key={bots._id}
        position={{ lat: bots.lat, lng: bots.lng }}
        // onClick={this.getOneBotInfo(bots._id)}
      />
    ));

    render() {
    return (
      <Map
        google={this.props.google}
        zoom={1.25}
        style={mapStyles}
        initialCenter={{
          lat: 37.759703,
          lng: -122.428093
        }}
      >
        {/* {console.log(this.props.saveBots)} */}
        {this.createMarker()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <Container className="m-2">
          {/* {console.log(console.log(this.state.activeMarkerId))} */}
          </Container>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBAIKAtjZeY9SStYI_Dr7XDiALX17AkK0Y"
})(MapContainer);
