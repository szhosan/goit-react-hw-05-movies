import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Review from '../Reviews/Revies';
import * as movieApi from '../../services/movie-api.js';
import s from './MovieDetailsView.module.css';

export default function MovieDetailsView() {
  const { pathname } = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const navigate = useNavigate();

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <>
        <button className={s.back_btn} onClick={() => navigate(-1)}>
          &#8592; Go back
        </button>
        <div className={s.movie_container}>
          <div className={s.photo_container}>
            <img
              className={s.poster}
              src={BASE_IMAGE_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={pathname.split('/').slice(0, 3).join('/') + '/cast'}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={pathname.split('/').slice(0, 3).join('/') + '/reviews'}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Review movieId={movieId} />} />
        </Routes>
      </>
    )
  );
}
