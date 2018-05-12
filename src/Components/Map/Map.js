import React from "react";
import "../Map/Map.css";

const Map = props => (
  <div id="Map">
    <h1>Map component</h1>
    {props.results.map((i, idx) => <p key={idx}>{i.Type}</p>)}
  </div>
);

export default Map;
