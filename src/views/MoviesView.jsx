import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../services/movie-api.js';

export default function MoviesView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log(movieId);
    movieApi.fetchMovieDetails(movieId).then(setMovie);
  }, []);

  return <h3>Movie info</h3>;
}
