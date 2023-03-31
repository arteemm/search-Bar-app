import React from 'react';
import cl from './filmCard.module.scss';
import { Film } from '../../types';

const FilmCard: React.FC<Film> = (props) => {
  return (
    <div className={cl['film-card']}>
      <p className={cl['film-card__title']}>{props.Title}</p>
      <p className={cl['film-card__year']}>{props.Year}</p>
      <p className={cl['film-card__type']}>{props.Type}</p>
      <div
        className={cl['film-card__image']}
        style={{ backgroundImage: `url(${props.Poster})` }}
      ></div>
    </div>
  );
};

export default FilmCard;
