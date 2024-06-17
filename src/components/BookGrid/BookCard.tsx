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
    retailPrice: {
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
  return (
    <div key={book.id} className="flex border">
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <div className="flex w-full flex-col justify-between gap-1 p-4">
        <h3 className="font-bold">{book.volumeInfo.title}</h3>
        <p title={book.volumeInfo.authors.join(', ')}>{authors}</p>
        <p>
          {book.saleInfo.retailPrice.amount}{' '}
          {book.saleInfo.retailPrice.currencyCode}
        </p>
        <button className="rounded bg-blue-400">Details</button>
        <button className="rounded bg-green-400">Add to Cart</button>
      </div>
    </div>
  )
}
