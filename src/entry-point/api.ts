// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from './store'

export interface LoginRequest {
  username: string
  password: string
}
export interface CurrentUser {
  id: string
  username: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders(headers, { getState }) {
      const csrfToken = (getState() as RootState).csrf.token
      if (csrfToken) {
        headers.set('X-CSRF-Token', csrfToken)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    csrf: builder.query<{ csrf: string }, void>({
      query() {
        return '/session/csrf.json'
      },
    }),
    current_user: builder.query<CurrentUser | null, void>({
      query() {
        return '/web3/logged_in.json'
      },
    }),
    login: builder.mutation<{ user: { username: string } }, LoginRequest>({
      query: (credentials) => ({
        url: '/session.json',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useCsrfQuery, useLoginMutation } = api
