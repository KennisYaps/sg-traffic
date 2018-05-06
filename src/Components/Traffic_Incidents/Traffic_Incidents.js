import React from "react";
import Map from '../Map/Map';

const TrafficIncident = props => (
  <div>
    <Map markers={props.displayIncidents} />
  </div>
);

export default TrafficIncident;
