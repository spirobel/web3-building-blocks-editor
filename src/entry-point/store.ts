import { configureStore, combineReducers, EnhancedStore, Reducer, ReducerFromReducersMapObject, ReducersMapObject } from '@reduxjs/toolkit';
import { emptySplitApi } from './api'
import counterReducer from '../lego-blocks/counter/counter-slice';



interface ReduxStore extends EnhancedStore {
  asyncReducers: ReducersMapObject;
  injectReducer: (key: string, asyncReducer: Reducer) => void;
}

const staticReducers: ReducersMapObject = {
  counter: counterReducer as Reducer
}


function createReducer(asyncReducers: ReducersMapObject) {
  return combineReducers(Object.assign(staticReducers, asyncReducers))
 
}


function setupStore(): ReduxStore{
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(emptySplitApi.middleware);
    },
  }) as ReduxStore
    // Add a dictionary to keep track of the registered async reducers
    store.asyncReducers = {}

    // Create an inject reducer function
    // This function adds the async reducer, and creates a new combined reducer
    store.injectReducer = (key, asyncReducer) => {
      store.asyncReducers[key] = asyncReducer
      store.replaceReducer(createReducer(store.asyncReducers))
    }
  
    // Return the modified store
    return store
}
export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;