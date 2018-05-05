import React, { Component } from "react";
import "./Main.css";
import SideBarAndMap from "../SideBarAndMap/SideBarAndMap";
import { getData } from "../../utils/fetchAPI";
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
        <SideBarAndMap incidentsDatas={this.state.trafficIncidentsDatas} />
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
