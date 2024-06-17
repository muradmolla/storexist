import googleRequest from './googleRequest'
import type { GoogleBooksResponse } from './googleTypes'

const GoogleBooksApi = {
  searchBooks: async (query: string): Promise<GoogleBooksResponse> => {
    const response = googleRequest.get<GoogleBooksResponse>(
      'volumes',
      new URLSearchParams({ q: query })
    )
    return response
  }
}

export default GoogleBooksApi
