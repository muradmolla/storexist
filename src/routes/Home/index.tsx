import { useState, useEffect } from 'react'
import GoogleBooksApi from 'functions/GoogleBooksApi'
import BookGrid from 'components/BookGrid'

import type { BookSummary } from 'components/BookGrid/BookCard'
import Paginate from 'components/Paginate'

export default function Home() {
  const [books, setBooks] = useState<BookSummary[]>([])
  const [maxPage, setMaxPage] = useState(1)
  const [page, setPage] = useState(1)
  useEffect(() => {
    GoogleBooksApi.searchBooks('javascript', page).then((books) => {
      setBooks(books.items)
      console.log(books)
      setMaxPage(Math.ceil(books.totalItems / 10))
    })
  }, [page])

  return (
    <div className="p-5">
      <BookGrid books={books} />
      <Paginate maxPage={maxPage} currentPage={page} pageCall={setPage} />
    </div>
  )
}
