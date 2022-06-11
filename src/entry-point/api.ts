// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/',
    prepareHeaders(headers) {
      // headers.set('credentials', 'include')
      // headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    csrf: builder.query<{ csrf: string }, void>({
      query() {
        return '/session/csrf.json'
      },
    }),
  }),
})

export const { useCsrfQuery } = api
