import React from "react";
import "./SearchBar.css";
const SearchBar = props => (
  <div id="SearchBar">
    <h1>SearchBar component</h1>
    <form>
      <input
        type="search"
        id="searchBar-input"
        placeholder="Type Chinatown..."
        onChange={props.onSearchChange}
        value={props.searchValue}
      />
    </form>
  </div>
);

export default SearchBar;
