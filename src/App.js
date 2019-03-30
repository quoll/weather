import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        lat: "",
        lng: ""
    }

    componentDidMount() {
        this.getLocation();
    }

    // getLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(displayLocationInfo);
    //       }
          
    //       function displayLocationInfo(position) {
    //         const lat = position.coords.latitude;
    //         const lng = position.coords.longitude;
          
    //         console.log(`latitude: ${ lat } | longitude: ${ lng }`);

    //       }

    // }

    getLocation = () => {
        function success(position) {
            const lat  = position.coords.latitude;
            const lng = position.coords.longitude;
            // this.setState({
            //     lat: lat,
            //     lng: lng
            // });
            console.log(lat, lng);
          }
        
          function error() {
            console.log('Unable to retrieve your location');
          }
        
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    
  render() {
    return (
      <div className="App">

        {/* {this.state.lat}
        {this.state.lng} */}

      </div>
    );
  }
}

export default App;
