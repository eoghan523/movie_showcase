import axios from 'axios';

const API_KEY = 'c33c0f8';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovieData = async (movieName) => {
    try {
      console.log("Searching API with movie unformatted: ", movieName);
      const formattedName = movieName.includes(" ") ? "\"" + movieName + "\"" : movieName;
      console.log("Searching API with movie formatted: ", formattedName);
      const response = await axios.get(BASE_URL, {
        params: {
          s: formattedName,  // Search term
          apikey: API_KEY,
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return { Error: "Movie not found" };
    }
  };

export const fetchMovieDetailedData = async (imdbID) => {
    try {

      // Example ID from data is:
      // response.data.Search[0].imdbID;

      console.log("Searching API with movie ID: ", imdbID);

      const detailedResponse = await axios.get(BASE_URL, {
        params: {
          i: imdbID,
          apikey: API_KEY,
        },
      });

      console.log(detailedResponse.data);
      return detailedResponse.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      if (error.response && error.response.status === 401) {
        return { Error: "Unauthorized - Check your API key." };
      }
      return { Error: "Movie not found or API request failed." };
    }
  };