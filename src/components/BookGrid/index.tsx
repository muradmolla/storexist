import BookCard from './BookCard'
import type { BookSummary } from './BookCard'

export default function BookGrid({ books }: { books: BookSummary[] }) {
  const renderBooks = books.map((book) => (
    <BookCard key={book.id} book={book} />
  ))
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderBooks}
    </div>
  )
}
