import React, { Component } from 'react';
import './App.css';

class App extends Component {


    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
          }
          
          function displayLocationInfo(position) {
            const lng = position.coords.longitude;
            const lat = position.coords.latitude;
          
            console.log(`longitude: ${ lng } | latitude: ${ lat }`);
          }
    }

  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default App;
