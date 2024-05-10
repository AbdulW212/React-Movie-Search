import React, { useState, useEffect } from "react";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie("Godfather");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      {movie && <MovieDisplay movie={movie} />}
    </div>
  );
}