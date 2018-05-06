import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to My Traffic App</h1>
        <br />
        <Main />
      </div>
    );
  }
}

export default App;
