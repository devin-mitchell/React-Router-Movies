import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  const { path } = useRouteMatch()

  return (
    <div className="movie-list">
      {movies.map(movie => ( 
          <MovieDetails key={movie.id} movie={movie} />
       
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;

  return (
    <Link to={`movies/${movie.id}`}> 
      <div className="movie-card">
        <MovieCard movie={movie} />
      </div>
    </ Link>
  );
}
