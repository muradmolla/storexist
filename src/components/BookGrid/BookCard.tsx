import AddToCart from 'components/AddToCart'
import { useNavigate } from 'react-router-dom'
import { truncate } from 'utils'
import { extractAuthorInfo } from 'utils/book'

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
  const { authorShortText, authorsWithCommas } = extractAuthorInfo(
    book.volumeInfo.authors
  )

  const navigate = useNavigate()

  const price =
    book.saleInfo.saleability === 'FOR_SALE' && book.saleInfo.retailPrice
      ? `${book.saleInfo.retailPrice.amount} ${book.saleInfo.retailPrice.currencyCode}`
      : 'Not for sale'
  return (
    <div key={book.id} className="flex border">
      <div className="flex size-32 items-center justify-center">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo?.title}
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-1 p-4">
        <h3 className="font-bold">
          {truncate(book.volumeInfo.title, BookCardConfig.titleTruncate)}
        </h3>
        <p title={authorsWithCommas}>{authorShortText}</p>
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
