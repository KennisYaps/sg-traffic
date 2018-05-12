import React from "react";
import "../Map/Map.css";

const Map = props => (
  <div id="Map">
    <h1>Map component</h1>
    {props.results.map((result, idx) => (
      <p key={idx}>
        {result.Type}&nbsp;&nbsp;&nbsp;{result.Message}
      </p>
    ))}
  </div>
);

export default Map;
