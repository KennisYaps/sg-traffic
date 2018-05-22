import React from "react";
import "./SearchResults.css";
const SearchResults = props => (
  <div id="SearchResults">
    {/* <h1>Search Results component</h1> */}
    <table>
      <tr>
        <th>Type</th>
        <th>Message</th>
      </tr>
      {props.results.map((result, idx) => (
        <tr key={idx}>
          <td>{result.Type}</td>
          <td>{result.Message}</td>
        </tr>
      ))}
    </table>
  </div>
);

export default SearchResults;
