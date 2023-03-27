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
