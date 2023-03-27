import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filmsSlice from './reducers/filmsSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    films: filmsSlice,
  },
  middleware: () => customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
