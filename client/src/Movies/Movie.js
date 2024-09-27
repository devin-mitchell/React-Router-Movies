import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

export default function Movie(param) { 
  const [movie, setMovie] = useState();
  const { id } = useParams();
 
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(res => {
        setMovie(res.data)
      })
      .catch(err => {
        console.error(err);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <MovieCard movie={movie} />
          <h3>Actors</h3>
          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
      
      <div className="save-button">Save</div>
    </div>
  );
}
