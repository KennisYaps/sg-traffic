import React, { Component } from "react";
import {
  getSearchResults,
  getOneMapToken,
  reverseGeocode
} from "../../utils/fetchAPI";
import TrafficIncident from "../Traffic_Incidents/Traffic_Incidents";
import "./SearchBar.css";
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      //   isLoadingIcon: false,
      inputValue: "",
      oneMapSearchResults: [],
      matchedResults: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  render() {
    const isMatchedResult = this.state.matchedResults;
    // const displayMatchedResult = isMatchedResult.map((result, idx) => {
    //   return (
    //     <span key={idx}>
    //       {result.Type}
    //       <br />
    //       {result.Message}
    //     </span>
    //   );
    // });
    return (
      <div>
        This is the search component
        <span id="searchBarAndDisplayResult">
          <form>
            <input
              type="search"
              id="searchBar"
              placeholder="Enter a Location"
              onChange={this.handleSearchChange}
              value={this.state.inputValue}
            />
          </form>
          {/* {isMatchedResult.length !== 0
            ? { displayMatchedResult }
            : "No matched result"} */}
        </span>
        {isMatchedResult.length !== 0 ? (
          <TrafficIncident displayIncidents={this.state.matchedResults} />
        ) : (
          ""
        )}
      </div>
    );
  }
  // destructuring: pass in {value} as an argument because i want to get the key: "value" from the object
  handleSearchChange(event) {
    event.preventDefault();
    this.setState({
      //   isLoadingIcon: true,
      inputValue: event.target.value
    });
    // wait for 3ms after user stop typing then search
    setTimeout(async () => {
      if (this.state.inputValue.length < 1) {
        this.setState({
          //   isLoadingIcon: false,
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

        // compare between one map search and incident data
        const oneMapResults = this.state.oneMapSearchResults;
        const incidentsData = this.props.incidentsDatas;
        const matched = oneMapResults
          .map(oneMap =>
            incidentsData.filter(
              incident =>
                incident.Latitude.toFixed(3) ==
                  parseFloat(oneMap.LATITUDE).toFixed(3) ||
                incident.Longitude.toFixed(3) ==
                  parseFloat(oneMap.LONGITUDE).toFixed(3)
            )
          )
          .filter(result => result.length > 0)[0];

        // reverse GeoCode for matched data
        // const oneMapToken = await getOneMapToken();
        // const reverseGeoCodeForMatchedResult = await Promise.all(
        //   matched.map(async match => {
        //     const reverse = await reverseGeocode(
        //       match.Latitude,
        //       match.Longitude,
        //       oneMapToken
        //     );
        //     console.log(reverse);
        //     return reverse;
        //   })
        // );
        // console.log("reverse geo code", reverseGeoCodeForMatchedResult);
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
