import { render, screen } from 'utils/storeTestUtils'
import BookCard from './BookCard'
import { singleMockBook } from 'mocks/Book'

describe('BookCard', () => {
  it('should render the book card', () => {
    const { container } = render(<BookCard book={singleMockBook} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(
      screen.getByText(singleMockBook.volumeInfo.title)
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${singleMockBook.volumeInfo.authors[0]} et al.`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `${singleMockBook.saleInfo.retailPrice.amount} ${singleMockBook.saleInfo.retailPrice.currencyCode}`
      )
    ).toBeInTheDocument()
  })
})
