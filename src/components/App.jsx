import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import HomeView from '../views/HomeView/HomeView';
import MoviesView from '../views/MoviesView/MoviesView';
import MovieDetailsView from '../views/MovieDetailsView/MovieDetailsView';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
      </Routes>
    </Container>
  );
};
