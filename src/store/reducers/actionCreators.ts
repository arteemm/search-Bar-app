import { createAsyncThunk } from '@reduxjs/toolkit';
import { testApi } from '../../api';

export const getImages = createAsyncThunk('images', testApi);
