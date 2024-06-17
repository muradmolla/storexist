import { useState, useEffect } from 'react'
import GoogleBooksApi from 'functions/GoogleBooksApi'
import BookGrid from 'components/BookGrid'

import type { BookSummary } from 'components/BookGrid/BookCard'

export default function Home() {
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
