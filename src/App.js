import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
// import DamnImage from "./Components/Main/GetTheDamnImage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="title">
          <h1 id="title-h1">What's Happening ?</h1>
          <p>Displaying Singapore's traffic condition in real time</p>
        </div>
        <Main />
        {/* <DamnImage /> */}
      </div>
    );
  }
}

export default App;
