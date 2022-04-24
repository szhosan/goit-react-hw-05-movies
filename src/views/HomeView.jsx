import { useState, useEffect } from 'react';
import * as movieApi from '../services/movie-api';
import { Link } from 'react-router-dom';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    movieApi.fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.results.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} key={id}>
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
