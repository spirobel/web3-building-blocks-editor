/* eslint no-param-reassign: 0 */

import { createSlice } from '@reduxjs/toolkit'
import { api, CurrentUser } from '../api'
import type { RootState } from '../store'

const slice = createSlice({
  name: 'current_user',
  initialState: null as CurrentUser | null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.current_user.matchFulfilled,
      (state, { payload }) => {
        state = payload
      }
    )
  },
})

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.current_user
