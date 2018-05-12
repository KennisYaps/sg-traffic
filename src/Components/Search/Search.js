import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }
  render() {
    return (
      <div id="Search">
        <h1>Search component</h1>
        <SearchBar
          onSearchChange={this.handleSearchChange}
          //   searchValue={this.state.value}
        />
        <SearchResults />
      </div>
    );
  }
  handleSearchChange = event => {
    event.preventDefault();
    console.log("event", event.target.value);
    let searchLocation = event.target.value;
    console.log("state1", this.state.searchValue);
    this.setState({ searchValue: searchLocation });
    console.log("state2", this.state.searchValue);
  };
}

export default Search;
