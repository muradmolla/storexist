import BookGrid from 'components/BookGrid'
import GoogleBooksApi from 'functions/GoogleBooksApi'
import { GoogleBook } from 'functions/GoogleBooksApi/googleTypes'
import { Params, useLoaderData } from 'react-router-dom'

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
  return await GoogleBooksApi.searchBooks(params.query).then((books) => {
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
    return { books: books.items }
  })
}

export default function Search() {
  const { books }: { books: GoogleBook[] } = useLoaderData() as {
    books: GoogleBook[]
  }
  return (
    <div className="p-5">
      <BookGrid books={books} />
    </div>
  )
}
