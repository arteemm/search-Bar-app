import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilms } from './actionCreators';
import { ResponseFilms, SearchParam } from '../../types';

interface StateTypeFilms {
  films: ResponseFilms;
  loading: boolean;
  error: { message: string; code: string } | null;
  searchParam: SearchParam;
  options: string;
}

const initialState: StateTypeFilms = {
  films: {} as ResponseFilms,
  loading: false,
  error: null,
  searchParam: {
    value: 'Lord',
    year: '',
    type: 'all',
    numberPage: 1,
  },
  options: '',
};

export const filmsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSearchWord: (state: StateTypeFilms, action: PayloadAction<string>) => {
      state.searchParam.value = action.payload;
    },

    setSearchYear: (state: StateTypeFilms, action: PayloadAction<string>) => {
      state.searchParam.year = action.payload;
    },

    setSearchType: (state: StateTypeFilms, action: PayloadAction<string>) => {
      state.searchParam.type = action.payload;
    },

    setPrevPage: (state: StateTypeFilms) => {
      state.searchParam.numberPage--;
    },

    setNextPage: (state: StateTypeFilms) => {
      state.searchParam.numberPage++;
    },

    setOriginalPage: (state: StateTypeFilms) => {
      state.searchParam.numberPage = 1;
    },
  },
  extraReducers: {
    [fetchFilms.pending.type]: (state) => {
      state.error = null;
    },
    [fetchFilms.fulfilled.type]: (state: StateTypeFilms, action: PayloadAction<ResponseFilms>) => {
      state.loading = false;
      state.films = action.payload;
    },
    [fetchFilms.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.films = {} as ResponseFilms;
    },
  },
});

export default filmsSlice.reducer;
