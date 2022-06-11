import { createSlice } from '@reduxjs/toolkit'
import { api } from '../api'
import type { RootState } from '../store'

const slice = createSlice({
  name: 'csrf',
  initialState: { token: null } as { token: string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.csrf.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.csrf
      }
    )
  },
})

export default slice.reducer

export const selectCsrfToken = (state: RootState) => state.csrf.token
