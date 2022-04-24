import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import HomeView from '../views/HomeView';
import MoviesView from '../views/MoviesView';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies/*" element={<MoviesView />}></Route>
      </Routes>
    </Container>
  );
};
