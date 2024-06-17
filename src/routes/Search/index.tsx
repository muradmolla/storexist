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
    throw new Error('Query is required')
  }
  return GoogleBooksApi.searchBooks(params.query).then((books) => {
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
