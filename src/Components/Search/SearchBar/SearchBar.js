import React from "react";
import "./SearchBar.css";
const SearchBar = props => (
  <div id="SearchBar">
    <h1>SearchBar component</h1>
    <form>
      <input
        type="search"
        id="searchBar_input"
        placeholder="Type Chinatown"
        onChange={props.onSearchChange}
      />
    </form>
  </div>
);

export default SearchBar;
