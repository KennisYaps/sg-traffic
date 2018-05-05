import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import { getSearchResults } from "../../../utils/fetchAPI";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      isLoadingIcon: false,
      inputValue: "",
      oneMapSearchResults: [],
      matchedResults: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  render() {
    return (
      <div>
        This is my search component
        <Search
          icon="search"
          loading={this.state.isLoadingIcon}
          fluid={true}
          onSearchChange={this.handleSearchChange}
          value={this.state.inputValue}
          results={this.state.matchedResults}
        />
      </div>
    );
  }
  // destructuring: pass in {value} as an argument because i want to get the key: "value" from the object
  handleSearchChange(event, { value }) {
    event.preventDefault();
    this.setState({
      isLoadingIcon: true,
      inputValue: value
    });

    // wait for 3ms after user stop typing then search
    setTimeout(async () => {
      if (this.state.inputValue.length < 1) {
        this.setState({
          isLoadingIcon: false,
          inputValue: "",
          oneMapSearchResults: [],
          matchedResults: []
        });
      }
      try {
        const getSearchResultsFromOneMapAPI = await getSearchResults(
          this.state.inputValue
        );
        this.setState({
          oneMapSearchResults: getSearchResultsFromOneMapAPI
        });
        console.log("One map search", this.state.oneMapSearchResults);
        console.log("incident data", this.props.incidentsDatas);

        // compare between one map search and incident data
        const oneMapResults = this.state.oneMapSearchResults;
        const incidentsData = this.props.incidentsDatas;
        const matched = oneMapResults
          .map(oneMap =>
            incidentsData.filter(
              incident =>
                incident.Latitude.toFixed(2) ==
                  parseFloat(oneMap.LATITUDE).toFixed(2) ||
                incident.Longitude.toFixed(2) ==
                  parseFloat(oneMap.LONGITUDE).toFixed(2)
            )
          )
          .filter(result => result.length > 0)[0];

        this.setState({
          isLoadingIcon: false,
          matchedResults: matched
        });
        console.log("matched results", this.state.matchedResults);
      } catch (error) {
        console.error("Failed to search");
      }
    }, 500);
  }
}

export default SearchBar;
