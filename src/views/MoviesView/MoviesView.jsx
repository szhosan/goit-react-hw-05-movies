import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/movie-api.js';
import MoviesLinkList from '../MoviesLinkList/MoviesLinkList';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const query = search.slice(8);
    if (!query) {
      return;
    }
    fetchSearchMovie(query).then(setMovies);
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();
    if (!query) {
      return;
    }
    navigate(`${pathname}/?search=${query}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" type="text"></input>
        <input type="submit" value="Search" />
      </form>
      {movies && <MoviesLinkList data={movies.results} />}
    </>
  );
}
