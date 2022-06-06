import { emptySplitApi } from '../../entry-point/api'

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`
        },
      }),
    }
  },
  overrideExisting: false,
})

export const { useFetchBreedsQuery } = extendedApi
