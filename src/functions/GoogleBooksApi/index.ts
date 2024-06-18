import googleRequest from './googleRequest'
import type { GoogleBook, GoogleBooksResponse } from './googleTypes'

const GoogleBooksApi = {
  searchBooks: async (
    query: string,
    page: number | null = null
  ): Promise<GoogleBooksResponse> => {
    const urlParams = new URLSearchParams({ q: query })
    if (page) {
      urlParams.append('startIndex', ((page - 1) * 10).toString())
    }
    const response = googleRequest.get<GoogleBooksResponse>(
      'volumes',
      urlParams
    )
    return response
  },
  bookDetails: async (id: string): Promise<GoogleBook> => {
    const response = googleRequest.get<GoogleBook>(`volumes/${id}`)
    return response
  }
}

export default GoogleBooksApi
