import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import SearchBar from '../SearchBar';
import cl from './header.module.scss';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className={cl.header}>
      <div className={`wrapper ${cl.header__wrapper}`}>
        <div className={cl.header__links}>
          <Link to="/" data-testid="main-link" className="link">
            Main
          </Link>
          <Link to="/about" data-testid="about-link" className="link">
            About us
          </Link>
        </div>
        {pathname === '/' ? <SearchBar /> : null}
      </div>
    </header>
  );
};

export default Header;
