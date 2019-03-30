import React, { Component } from 'react';
import './App.css';

class App extends Component {

    // state = {
    //     lat: "",
    //     lng: ""
    // }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
          }
          
          function displayLocationInfo(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
          
            console.log(`latitude: ${ lat } | longitude: ${ lng }`);
            
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
