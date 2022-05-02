import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movie-api';
import MoviesLinkList from 'components/MoviesLinkList/MoviesLinkList';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    movieApi.fetchTrending().then(setMovies);
    window.sessionStorage.setItem('prevRoute', '/');
  }, []);

  return (
    <>
      {movies && (
        <>
          <h2>Trending today</h2>
          <MoviesLinkList data={movies.results} />
        </>
      )}
    </>
  );
}
