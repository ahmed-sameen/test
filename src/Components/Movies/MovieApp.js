import React, { useEffect, useState, useMemo } from "react";
import MovieModal from "./MovieModal";
import "./MovieApp.css";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY";

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies once
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 400); // 400ms debounce

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredMovies = useMemo(
    () =>
      movies.filter(movie =>
        movie.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      ),
    [movies, debouncedSearch]
  );

  return (
    <div className="movie-app">
      <header className="header">
        <h1>Movie Explorer</h1>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </header>

      <div className="movie-grid">
        {filteredMovies.map(movie => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h2 className="movie-title">{movie.title}</h2>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default MovieApp;