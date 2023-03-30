import React from 'react';
import FilmCard from '../FilmCard';
import { Film } from '../../types';
import cl from './listFilmCards.module.scss';

type ListFilmCardsProps = {
  listFilms: Film[];
};

const ListFilmCards: React.FC<ListFilmCardsProps> = (props) => {
  return (
    <div className={cl.main__cards}>
      {props.listFilms
        ? props.listFilms.map((item) => {
            return <FilmCard key={item.imdbID} {...item} />;
          })
        : null}
    </div>
  );
};

export default ListFilmCards;
