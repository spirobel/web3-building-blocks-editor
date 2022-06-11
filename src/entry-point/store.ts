import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import csrfReducer from './boring-background-plumbing/csrf-slice'
import currentUserReducer from './boring-background-plumbing/current-user-slice'

export const store = configureStore({
  reducer: {
    csrf: csrfReducer,
    current_user: currentUserReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  },
})
// get the csrf token once on startup
store.dispatch(api.endpoints.csrf.initiate()).unsubscribe()
store.dispatch(api.endpoints.current_user.initiate()).unsubscribe()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
