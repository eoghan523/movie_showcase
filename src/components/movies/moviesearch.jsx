import React, { useState } from "react";
import { fetchMovieData } from "../../api/movieApi.js";
import { Button } from "@material-tailwind/react";

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieYear, setMovieYear] = useState("");
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

      {movieYear && !loading && !error && (
        <p className="text-lg font-semibold">Year: {movieYear}</p>
      )}
    </div>
  );
};

export default MovieSearch;
