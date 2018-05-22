import React, { Component } from "react";
import Map from "../Map/Map";
import "./Main.css";
import { getData } from "../../utils/fetchAPI";
import Search from "../Search/Search";
import ReactLoading from "react-loading";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      trafficIncidentsDatas: [],
      matchedResults: []
    };
  }
  render() {
    const isLoading =
      this.state.trafficIncidentsDatas.length === 0 ? (
        <ReactLoading
          id="loading-icon"
          type={"spin"}
          color={"black"}
          height={66}
          width={37}
        />
      ) : (
        <Map results={this.state.matchedResults} />
      );
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
        {isLoading}
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
