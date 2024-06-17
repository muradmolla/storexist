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
  const authors =
    book.volumeInfo.authors.length > 1
      ? `${book.volumeInfo.authors[0]} et al.`
      : book.volumeInfo.authors[0]

  const price =
    book.saleInfo.saleability === 'FOR_SALE' && book.saleInfo.retailPrice
      ? `${book.saleInfo.retailPrice.amount} ${book.saleInfo.retailPrice.currencyCode}`
      : 'Not for sale'
  return (
    <div key={book.id} className="flex border">
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <div className="flex w-full flex-col justify-between gap-1 p-4">
        <h3 className="font-bold">
          {truncate(book.volumeInfo.title, BookCardConfig.titleTruncate)}
        </h3>
        <p title={book.volumeInfo.authors.join(', ')}>{authors}</p>
        <p>{price}</p>
        <button className="rounded bg-blue-400">Details</button>
        <button className="rounded bg-green-400">Add to Cart</button>
      </div>
    </div>
  )
}
