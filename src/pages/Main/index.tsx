import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import FilmCard from '../../components/FilmCard';
import cl from './main.module.scss';

const MainPage: React.FC = () => {
  const { Search: filmCards } = useAppSelector((state) => state.films.films);

  return (
    <main className={cl.main}>
      <div className="wrapper">
        <div className={cl.main__cards}>
          {filmCards
            ? filmCards.map((item, index) => {
                return <FilmCard key={index} {...item} />;
              })
            : null}
        </div>
      </div>
    </main>
  );
};

export default MainPage;
