import { configureStore, combineReducers, EnhancedStore, Reducer, ReducerFromReducersMapObject, ReducersMapObject } from '@reduxjs/toolkit';
import { emptySplitApi } from './api'
import counterReducer from '../lego-blocks/counter/counter-slice';


const oldReducers: ReducersMapObject = {
  reducer: {} as Reducer
}


export function injectReducer(key: string, newReducer: Reducer) {
  oldReducers[key] = newReducer
  store.replaceReducer(combineReducers(oldReducers))
}

export const store = configureStore({
  reducer: {
    ...oldReducers,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(emptySplitApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;