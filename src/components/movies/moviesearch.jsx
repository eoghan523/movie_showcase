import React, { useState } from "react";
import { fetchMovieData, fetchMovieDetailedData } from "../../api/movieApi.js";
import { Button } from "@material-tailwind/react";

const MovieSearch = () => {
    // User movie name search:
  const [searchQuery, setSearchQuery] = useState("");
    // Movie Data:
  const [movieId, setMovieId] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieActors, setMovieActors] = useState("");
  const [movieAwards, setMovieAwards] = useState("");
  const [movieCountry, setMovieCountry] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieLanguage, setMovieLanguage] = useState("");
  const [moviePlot, setMoviePlot] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRated, setMovieRated] = useState("");
  const [movieRuntime, setMovieRuntime] = useState("");
  const [movieWriter, setMovieWriter] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieImdbRating, setMovieImdbRating] = useState("");

    // Page States:
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchQuery) return; 
    setLoading(true);
    setError("");

    // Get movie's IMDB ID
    const data = await fetchMovieData(searchQuery);
    if (data.Response === "True") {
      console.log("Setting MovieId to ", data.Search[0].imdbID);
      setMovieId(data.Search[0].imdbID); // Set movieId from search result
    } else {
      setMovieId("");
      setError("No movie found with that title.");
      setLoading(false);
      return;
    }

    // Wait for movieId to be updated and then fetch detailed movie data
    if (data.Search[0].imdbID) {
        console.log("MovieId is ", data.Search[0].imdbID);
  
        const dataDetailed = await fetchMovieDetailedData(data.Search[0].imdbID);
        if (dataDetailed.Response === "True") {
          setMovieTitle(dataDetailed.Title);
          setMovieYear(dataDetailed.Year);
          setMovieGenre(dataDetailed.Genre);
          setMovieRated(dataDetailed.Rated);
          setMoviePlot(dataDetailed.Plot);
          setMovieActors(dataDetailed.Actors);
          setMovieDirector(dataDetailed.Director);
          setMovieLanguage(dataDetailed.Language);
          setMovieCountry(dataDetailed.Country);
          setMovieAwards(dataDetailed.Awards);
          setMoviePoster(dataDetailed.Poster);
          setMovieRuntime(dataDetailed.Runtime);
          setMovieWriter(dataDetailed.Writer);
          setMovieImdbRating(dataDetailed.imdbRating);
        } else {
          setMovieId("");
          setError("No movie found with that ID.");
          setLoading(false);
          return;
        }
      }
  
      setLoading(false);
  };

  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl font-bold mb-4">Search for a Movie</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter movie name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md"
        />
        <Button
          color="lightBlue"
          className="px-6 py-2 rounded-r-md"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {movieYear && !loading && !error && (
        <p className="text-lg font-semibold">Year: {movieYear}</p>
      )}

    {movieImdbRating && !loading && !error && (
        <p className="text-lg font-semibold">Imdb Rating: {movieImdbRating}</p>
      )}
    </div>
  );
};

export default MovieSearch;
