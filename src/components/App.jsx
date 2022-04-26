import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
const HomeView = lazy(() =>
  import('../views/HomeView/HomeView' /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import('../views/MoviesView/MoviesView' /* webpackChunkName: "movies-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    '../views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "movie-details-view" */
  )
);

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
