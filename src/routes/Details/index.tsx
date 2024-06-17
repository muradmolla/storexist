import AddToCart from 'components/AddToCart'
import GoogleBooksApi from 'functions/GoogleBooksApi'
import { GoogleBook } from 'functions/GoogleBooksApi/googleTypes'
import { useLoaderData, type Params } from 'react-router-dom'
export async function loader({ params }: { params: Params }): Promise<{
  book: GoogleBook
}> {
  if (!params.bookid) {
    throw new Error('Book ID is required')
  }
  const book = await GoogleBooksApi.bookDetails(params.bookid)
  if (!Object.hasOwn(book, 'id'))
    throw new Response('Book not found', {
      status: 404,
      statusText: 'Not Found'
    })

  return { book }
}

export default function Details() {
  const { book }: { book: GoogleBook } = useLoaderData() as { book: GoogleBook }

  return (
    <div className="p-5">
      <div className="gap-4 md:flex md:justify-between">
        <div className="my-2 gap-4 md:flex">
          <img src={book.volumeInfo.imageLinks.small} />
          <div className="my-4">
            <p>Author: {book.volumeInfo.authors.join(', ')}</p>
            <p>Published Date: {book.volumeInfo.publishedDate}</p>
            <p>Page Count: {book.volumeInfo.pageCount}</p>
            <p>Categories: {book.volumeInfo.categories.join(', ')}</p>
            <p>Language: {book.volumeInfo.language}</p>
          </div>
        </div>
        <div className="my-4">
          <p>
            Price: {book.saleInfo.retailPrice?.amount}{' '}
            {book.saleInfo.retailPrice?.currencyCode}
          </p>
          <AddToCart id={book.id} />
        </div>
      </div>
      <h1 className="text-2xl font-bold">{book.volumeInfo.title}</h1>
      <p className="text-gray-500">{book.volumeInfo.authors.join(', ')}</p>
      <p>{book.volumeInfo.description}</p>
    </div>
  )
}
