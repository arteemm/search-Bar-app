import React, { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFilms } from '../../store/reducers/actionCreators';
import { filmsSlice } from '../../store/reducers/filmsSlice';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.films.searchParam);
  const { setSearchWord } = filmsSlice.actions;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWord(event.target.value));
  };

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchFilms({ value }));
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input type="text" onChange={handleChange} value={value} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
