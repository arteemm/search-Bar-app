import { Link } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {
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
    </header>
  );
};

export default Header;
