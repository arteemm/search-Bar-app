import React, { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFilms } from '../../store/reducers/actionCreators';
import { filmsSlice } from '../../store/reducers/filmsSlice';
import cl from './searchBar.module.scss';
import Select from '../Select';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { value, year, type, numberPage } = useAppSelector((state) => state.films.searchParam);
  const { setSearchWord, setSearchYear, setSearchType, setOriginalPage } = filmsSlice.actions;

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setOriginalPage());
    dispatch(fetchFilms({ value, year, type, numberPage }));
  };

  const changeSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWord(event.target.value));
  };

  const changeSearchYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchYear(event.target.value));
  };

  const changeSearchType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchType(event.target.value));
  };

  const typeOptions = ['movie', 'series', 'episode', 'all'];

  return (
    <form onSubmit={handlerSubmit} className={cl['search-bar']}>
      <div className={cl['search-bar__container']}>
        <label htmlFor="input-search">Movie title to search for: </label>
        <input
          id="input-search"
          type="text"
          onChange={changeSearchWord}
          value={value}
          className={cl['search-bar__input']}
        />
        <button type="submit" className={`button ${cl['search-bar__button']}`}>
          Search
        </button>
      </div>
      <div className={cl['search-bar__options']}>
        <div className={cl['search-bar__option']}>
          <label htmlFor="input-year">Choose year release: </label>
          <input
            id="input-year"
            type="text"
            onChange={changeSearchYear}
            value={year}
            className={`${cl['search-bar__input']} ${cl['search-bar__input_year']}`}
            placeholder="year"
          />
        </div>
        <div className={cl['search-bar__option']}>
          <label>Choose type: </label>
          <Select options={typeOptions} value={type} handleChange={changeSearchType} />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
