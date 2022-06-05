// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
          headers.set('x-api-key', DOGS_API_KEY);
    
          return headers;
        },
      }),
  endpoints: () => ({}),
})