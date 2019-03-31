import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    state = {
        lat: "",
        lng: "",
        name: "",
        greeting: ""
    }

    componentDidMount() {
        this.getLocation();
        // this.apiCall();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => { 
            this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }); 
        })
    }

    handleChange = (event) => {
        this.setState({ 
            name: event.target.value 
        });
    }

    handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
        .then(response => response.json())
        .then(state => this.setState(state));
    }

    // apiCall = () => {
    //     axios.get(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API}/${this.state.lat},${this.state.lng}`)
    //     .then(res => {
    //         const result = res.data;
    //         console.log(result);
    //     })
    // }

  render() {
    return (
      <div className="App">

        <h4>Latitude: {this.state.lat}</h4>
        <h4>Longitude: {this.state.lng}</h4>

        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>

        <div className="footer">
            <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>

      </div>
    );
  }
}

export default App;
