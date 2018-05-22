import React from "react";
import "./SearchResults.css";
const SearchResults = props => (
  <div id="SearchResults">
    {/* <h1>Search Results component</h1> */}
    {props.results.map((result, idx) => (
      <li key={idx}>
        {result.Type}&nbsp;&nbsp;&nbsp;{result.Message}
      </li>
    ))}
  </div>
);

export default SearchResults;
