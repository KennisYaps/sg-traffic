import React, { Component } from "react";
import Map from "../Map/Map";
import "./Main.css";
import { getData } from "../../utils/fetchAPI";
import Search from "../Search/Search";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      trafficIncidentsDatas: [],
      matchedResults: []
    };
  }
  render() {
    return (
      <div id="Main">
        <h1>Main Component</h1>
        <h4>
          Current Traffic Incident: {this.state.trafficIncidentsDatas.length}{" "}
        </h4>
        <Search
          data={this.state.trafficIncidentsDatas}
          onSetLocation={this.handleSetLocation}
          results={this.state.matchedResults}
          onRefreshData={this.handleRefresh}
        />
        <Map results={this.state.matchedResults} />
      </div>
    );
  }
  async componentDidMount() {
    const incidentsDatas = await getData("TrafficIncidents");
    this.setState({
      trafficIncidentsDatas: incidentsDatas,
      matchedResults: incidentsDatas
    });
  }

  handleSetLocation = location => {
    this.setState({ matchedResults: location });
  };

  handleRefresh = async () => {
    const incidentsDatas = await getData("TrafficIncidents");
    this.setState({
      trafficIncidentsDatas: incidentsDatas,
      matchedResults: incidentsDatas
    });
  };
}

export default Main;
