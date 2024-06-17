import GoogleBooksApi from './index'

describe('GoogleBooksAPI', () => {
  it('should return a list of books', async () => {
    const response = await GoogleBooksApi.searchBooks('javascript')
    expect(response.items.length).toBeGreaterThan(0)
  })
})
