import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          to="/"
          className={navData => (navData.isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={navData => (navData.isActive ? s.activeLink : s.link)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
