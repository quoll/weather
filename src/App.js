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

    getLocation = () => {
        let component = this;
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // console.log(position);
                // console.log(position.coords.latitude);
                // console.log(position.coords.longitude);
                component.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        }
    }

    
  render() {
    return (
      <div className="App">

        <h4>Latitude: {this.state.lat}</h4>
        <h4>Longitude: {this.state.lng}</h4>

      </div>
    );
  }
}

export default App;
