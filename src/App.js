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
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                // this.setState({
                //     lat: position.coords.latitude,
                //     lng: position.coords.longitude,
                // });
            });
        }
    }

    
  render() {
    return (
      <div className="App">

        <h4>{this.state.lat}</h4>
        <h4>{this.state.lng}</h4>

      </div>
    );
  }
}

export default App;
