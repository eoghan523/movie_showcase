import React, { useState } from "react";
import { fetchMovieData } from "../../api/movieApi.js";
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
    const data = await fetchMovieData(searchQuery);
    if (data.Response === "True") {
      setMovieYear(data.Search[0].Year);
      
    } else {
      setMovieYear("");
      setError("No movie found with that title.");
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

      {movieId && !loading && !error && (
        <p className="text-lg font-semibold">MoveID: {movieId}</p>
      )}
      

      {movieTitle && !loading && !error && (
        <p className="text-lg font-semibold">Title: {movieTitle}</p>
      )}
   

      {movieYear && !loading && !error && (
        <p className="text-lg font-semibold">Year: {movieYear}</p>
      )}
   

      {movieCountry && !loading && !error && (
        <p className="text-lg font-semibold">Country: {movieCountry}</p>
      )}

      {movieActor && !loading && !error && (
        <p className="text-lg font-semibold">Actor: {movieActor}</p>
      )}

      {movieDirector && !loading && !error && (
        <p className="text-lg font-semibold">Director: {movieDirector}</p>
      )}

      {movieAwards && !loading && !error && (
        <p className="text-lg font-semibold">Awards: {movieAwards}</p>
      )}

      {movieGenre && !loading && !error && (
        <p className="text-lg font-semibold">Genre: {movieGenre}</p>
      )}

      {movieLanguage && !loading && !error && (
        <p className="text-lg font-semibold">Language: {movieLanguage}</p>
      )}

      {moviePlot && !loading && !error && (
        <p className="text-lg font-semibold">Plot: {moviePlot}</p>
      )}

      
      {moviePoster && !loading && !error && (
        <p className="text-lg font-semibold">Poster: {moviePoster}
        <img src={'moviePoster'} alt='Movie Poster'> </img>
        </p>
      )}


      
{movieLanguage && !loading && !error && (
        <p className="text-lg font-semibold">Language: {movieLanguage}</p>
      )}
      
{movieLanguage && !loading && !error && (
        <p className="text-lg font-semibold">Language: {movieLanguage}</p>
      )}
      
{movieLanguage && !loading && !error && (
        <p className="text-lg font-semibold">Language: {movieLanguage}</p>
      )}





        {/* Display Poster */}
        {movieYear.poster && movieYear.poster !== "N/A" ? (
            <img src={movieYear.poster} alt={`${movieYear.title} Poster`} className="mt-4 max-w-xs" />
          ) : (
            <p>No poster available.</p>
          )}


    </div>
  );
};

export default MovieSearch;
