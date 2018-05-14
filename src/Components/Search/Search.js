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
          searchValue={this.state.searchValue}
          onSearchChange={this.handleSearchChange}
        />
        <button id="Reload-Button" onClick={this.props.onRefreshData}>
          Reload
        </button>
        {this.state.searchValue !== "" ? (
          <SearchResults data={this.props.data} results={this.props.results} />
        ) : (
          ""
        )}
      </div>
    );
  }
  handleSearchChange = event => {
    event.preventDefault();
    let searchLocation = event.target.value;
    this.setState({ searchValue: searchLocation });

    let matchedResults = [];

    let regexPattern = new RegExp(escapeSpecialRegExp(searchLocation), "igm");
    let trafficIncidentsDatas = this.props.data;
    trafficIncidentsDatas.map(data => {
      let isSearchSuccessful = data.Message.search(regexPattern);
      return isSearchSuccessful === -1 ? -1 : matchedResults.push(data);  // [Qns]: can u put `return` this way
    });
    this.props.onSetLocation(matchedResults);
    return matchedResults;
  };
}

const escapeSpecialRegExp = string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
};

export default Search;
