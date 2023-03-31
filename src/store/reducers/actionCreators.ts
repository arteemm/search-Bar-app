import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFilms } from '../../api';

export const fetchFilms = createAsyncThunk('films', getFilms);
