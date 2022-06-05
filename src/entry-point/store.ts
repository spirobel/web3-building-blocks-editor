import { configureStore } from '@reduxjs/toolkit';
import { emptySplitApi } from './api'
import counterReducer from '../lego-blocks/counter/counter-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(emptySplitApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;