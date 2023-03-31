import React from 'react';
import cl from './filmCard.module.scss';
import { Film } from '../../types';

const FilmCard: React.FC<Film> = (props) => {
  return (
    <div className={cl['film-card']}>
      <div
        className={cl['film-card__image']}
        style={{ backgroundImage: `url(${props.Poster})` }}
      ></div>
      <p className={cl['film-card__title']}>{`Title: ${props.Title}`}</p>
      <p className={cl['film-card__year']}>{`Year of release: ${props.Year}`}</p>
      <p className={cl['film-card__type']}>{`Type: ${props.Type}`}</p>
    </div>
  );
};

export default FilmCard;
