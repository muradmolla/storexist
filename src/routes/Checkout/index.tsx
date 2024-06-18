import RemoveFromCart from 'components/RemoveFromCart'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'store/hooks'
import { selectCartItems, selectCartTotal } from 'store/slices/cart'
import { extractAuthorInfo } from 'utils/book'
import { fixPrice } from 'utils'

export default function Checkout() {
  const navigate = useNavigate()
  const books = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)

  const bookRender = books.map((book) => (
    <div key={book.id} className="my-8 flex">
      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
      <div className="pl-4">
        <p>{book.volumeInfo.title}</p>
        <p>
          <span className="font-bold">Authors:</span>{' '}
          {extractAuthorInfo(book.volumeInfo.authors).authorsWithCommas}
        </p>
        <p>
          Price: {book.saleInfo.retailPrice?.amount}{' '}
          {book.saleInfo.retailPrice?.currencyCode}
        </p>
        <RemoveFromCart id={book.id} />
      </div>
    </div>
  ))
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="grow">{bookRender}</div>
        <div className="md:w-60">
          <div className="border p-2">
            <h1 className="text-center text-2xl font-bold">Cart</h1>
            <p>
              <span className="font-bold">Total:</span> {fixPrice(total)}
            </p>
            <button
              onClick={() =>
                navigate('/checkout/information', { state: { books } })
              }
              className="mt-4 w-full bg-blue-500 p-2 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
