import React, { Component } from "react";
import "./Main.css";
import { getData } from "../../utils/fetchAPI";
import SearchBar from '../SearchBar/SearchBar';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      trafficIncidentsDatas: []
    };
  }
  render() {
    return (
      <div id="Main">
        <h4>Current No Of Incidents: {this.state.trafficIncidentsDatas.length}</h4>
        <SearchBar incidentsDatas={this.state.trafficIncidentsDatas} />
      </div>
    );
  }
  async componentDidMount() {
    const incidentsDatas = await getData("TrafficIncidents");
    this.setState({ trafficIncidentsDatas: incidentsDatas });
    // this.interval = await setInterval(data, 1000); // 2 mins
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }
}

export default Main;
