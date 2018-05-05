const DATAMALL_KEY = process.env.REACT_APP_DATAMALL_API_KEY;
const CORS_ANYWHERE_URL = `https://cors-anywhere.herokuapp.com/`;

const fetchLTAData = apiEndpoint => {
  return fetch(
    CORS_ANYWHERE_URL +
      `datamall2.mytransport.sg/ltaodataservice/${apiEndpoint}`,
    {
      method: "get",
      headers: {
        Accept: "application/json",
        AccountKey: DATAMALL_KEY
      }
    }
  );
};

export const getData = async endpoint => {
  const response = await fetchLTAData(endpoint);
  if (response.ok) {
    const json = await response.json();
    return json.value;
  } else {
    console.error("Failed to fetch Traffic Incident API");
  }
};

export const getSearchResults = async searchValues => {
  const response = await fetch(
    CORS_ANYWHERE_URL +
      `developers.onemap.sg/commonapi/search?searchVal=${searchValues}&returnGeom=Y&getAddrDetails=Y`,
    {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    }
  );
  if (response.ok) {
    try {
      const json = await response.json();
      const totalSearchFound = json.found;
      const resultsDisplayed = json.results;

      // if (totalSearchFound !== resultsDisplayed) {
      //   const message = `Please indicate the full address if you did not manage to get the data\n +
      //     ${resultsDisplayed}`;
      //   return resultsDisplayed;
      // }
      return resultsDisplayed;
    } catch (error) {
      console.error("Network error?");
    }
  } else {
    console.error("Network error: Failed to get searched datas");
  }
};
