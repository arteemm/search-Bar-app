import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import cl from './main.module.scss';
import ListFilmCards from '../../components/ListFilmCards';
import PageControls from '../../components/PageControls';

const MainPage: React.FC = () => {
  const {
    films: { Search: filmCards },
    films,
  } = useAppSelector((state) => state.films);

  return (
    <main className={cl.main}>
      <div className={`${cl.main__wrapper} wrapper`}>
        <ListFilmCards listFilms={filmCards} />
        {films.Response === 'False' ? <div>Not found result!</div> : null}
        <PageControls />
      </div>
    </main>
  );
};

export default MainPage;
