import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchFilms } from '../../store/reducers/actionCreators';
import SearchBar from '../SearchBar';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilms({ value: 'Summer' }));
  });

  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="wrapper navigation">
        <Link to="/" data-testid="main-link" className="header__link">
          Main
        </Link>
        <Link to="/about" data-testid="about-link" className="header__link">
          About us
        </Link>
      </div>
      {pathname === '/' ? <SearchBar /> : null}
    </header>
  );
};

export default Header;
