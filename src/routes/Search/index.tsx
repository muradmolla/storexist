import BookGrid from 'components/BookGrid'
import Paginate from 'components/Paginate'
import GoogleBooksApi from 'functions/GoogleBooksApi'
import { GoogleBook } from 'functions/GoogleBooksApi/googleTypes'
import { Params, useLoaderData, useNavigate } from 'react-router-dom'

export async function loader({
  params
}: {
  params: Params
}): Promise<{ books: GoogleBook[] }> {
  if (!params.query) {
    throw new Response('Query is required', {
      status: 400,
      statusText: 'Query is required'
    })
  }
  const page = Number(params.page) || 1
  return await GoogleBooksApi.searchBooks(params.query, page).then((books) => {
    if (
      !Object.hasOwn(books, 'items') ||
      !Array.isArray(books.items) ||
      books.items.length <= 0
    ) {
      throw new Response('Book not found', {
        status: 404,
        statusText: 'Book not found'
      })
    }
    return {
      books: books.items,
      maxPage: Math.ceil(books.totalItems / 10),
      page,
      query: params.query
    }
  })
}

export default function Search() {
  const {
    books,
    maxPage,
    page,
    query
  }: { books: GoogleBook[]; maxPage: number; page: number; query: string } =
    useLoaderData() as {
      books: GoogleBook[]
      maxPage: number
      page: number
      query: string
    }
  const navigate = useNavigate()
  const changePage = (p: number) => {
    navigate(`/search/${query}/${p}`)
  }
  return (
    <div className="p-5">
      <BookGrid books={books} />
      <Paginate maxPage={maxPage} currentPage={page} pageCall={changePage} />
    </div>
  )
}
