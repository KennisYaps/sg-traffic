import React, { Component } from "react";
import "./App.css";
import Main from './Components/Main/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="title">
          <h1 id="title-h1">What's Happening ?</h1>
          <p>Displaying Singapore's traffic condition in real time</p>
        </div>
        <Main/>
      </div>
    );
  }
}

export default App;
