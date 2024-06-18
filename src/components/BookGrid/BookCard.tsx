import AddToCart from 'components/AddToCart'
import { useNavigate } from 'react-router-dom'
import { truncate } from 'utils'

export const BookCardConfig = {
  titleTruncate: 30
}

export interface BookSummary {
  id: string
  volumeInfo: {
    title: string
    imageLinks: {
      thumbnail: string
      smallThumbnail: string
    }
    description: string
    authors: string[]
  }
  saleInfo: {
    saleability: string
    retailPrice?: {
      amount: number
      currencyCode: string
    }
  }
}

export default function BookCard({ book }: { book: BookSummary }) {
  let authors = 'Unknown Author'
  let authorsTitle = 'Unknown Author'
  if (book.volumeInfo.authors) {
    authors =
      book.volumeInfo.authors.length > 1
        ? `${book.volumeInfo.authors[0]} et al.`
        : book.volumeInfo.authors[0]
    authorsTitle = book.volumeInfo.authors.join(', ')
  }

  const navigate = useNavigate()

  const price =
    book.saleInfo.saleability === 'FOR_SALE' && book.saleInfo.retailPrice
      ? `${book.saleInfo.retailPrice.amount} ${book.saleInfo.retailPrice.currencyCode}`
      : 'Not for sale'
  return (
    <div key={book.id} className="flex border">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo?.title}
      />
      <div className="flex w-full flex-col justify-between gap-1 p-4">
        <h3 className="font-bold">
          {truncate(book.volumeInfo.title, BookCardConfig.titleTruncate)}
        </h3>
        <p title={authorsTitle}>{authors}</p>
        <p>{price}</p>
        <button
          onClick={() => navigate(`/details/${book.id}`)}
          className="rounded bg-blue-400"
        >
          Details
        </button>
        <AddToCart id={book.id} />
      </div>
    </div>
  )
}
