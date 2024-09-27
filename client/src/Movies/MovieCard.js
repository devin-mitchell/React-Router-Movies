import React from 'react';

export default function MovieCard ({ movie }) {
  return(
  <>
    <h2>{movie.title}</h2>
    <div className="movie-director">
      Director: <em>{movie.director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{movie.metascore}</strong>
    </div>
 </>
  )
}
