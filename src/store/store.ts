import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import imagesSlice from './reducers/imagesSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    images: imagesSlice,
  },
  middleware: () => customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
