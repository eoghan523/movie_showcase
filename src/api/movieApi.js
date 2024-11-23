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
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return { Error: "Movie not found" };
    }
  };