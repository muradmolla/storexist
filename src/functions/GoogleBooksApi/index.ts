import googleRequest from './googleRequest'
import type { GoogleBook, GoogleBooksResponse } from './googleTypes'

const GoogleBooksApi = {
  searchBooks: async (query: string): Promise<GoogleBooksResponse> => {
    const response = googleRequest.get<GoogleBooksResponse>(
      'volumes',
      new URLSearchParams({ q: query })
    )
    return response
  },
  bookDetails: async (id: string): Promise<GoogleBook> => {
    const response = googleRequest.get<GoogleBook>(`volumes/${id}`)
    return response
  }
}

export default GoogleBooksApi
