import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Place = ({ Valencia }) => <div>{Valencia}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {lat: 39.470802, lng: -0.368629},
    zoom: 15
  };
 
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Place
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

export default Map

// API KEY GOOGLE MAP ---> AIzaSyBuof3jwxMBFOFKDxvtJjAXWmVnmzhagwI
// AIzaSyCgs983Frq4YygbwV2uHawWmBXOj3vkpGM