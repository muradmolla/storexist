export const singleMockBook = {
  id: '1',
  volumeInfo: {
    title: `Mock Book`,
    imageLinks: {
      thumbnail: 'https://via.placeholder.com/150',
      smallThumbnail: 'https://via.placeholder.com/150'
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        `,
    authors: ['Author 1', 'Author 2']
  },
  saleInfo: {
    retailPrice: {
      amount: 1000,
      currencyCode: 'TRY'
    }
  }
}
