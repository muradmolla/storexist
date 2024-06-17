import { useEffect, useState } from 'react'
import GoogleBooksApi from 'functions/GoogleBooksApi'
import BookGrid from './BookGrid'
import type { BookSummary } from './BookGrid/BookCard'

function App() {
  const [books, setBooks] = useState<BookSummary[]>([])
  useEffect(() => {
    GoogleBooksApi.searchBooks('javascript').then((books) => {
      setBooks(books.items)
    })
  }, [])

  return (
    <div className="p-5">
      <BookGrid books={books} />
    </div>
  )
}

export default App
