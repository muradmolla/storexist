import { useAppSelector } from 'store/hooks'
import { selectCartItems, selectCartTotal } from 'store/slices/cart'
import { extractAuthorInfo } from 'utils/book'
import RemoveFromCart from 'components/RemoveFromCart'
import { useNavigate } from 'react-router-dom'

const voidFn = () => {}

export default function CartContent({
  closeCart = voidFn
}: {
  closeCart: () => void
}) {
  const navigate = useNavigate()

  const books = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)
  const list = books.map((book) => (
    <li key={book.id} className="my-4 flex">
      <div className="">
        <img src={book.volumeInfo.imageLinks.smallThumbnail} />
      </div>
      <div className="flex flex-col justify-between pl-4">
        <div>
          <p>
            {book.volumeInfo.title} (
            {extractAuthorInfo(book.volumeInfo.authors).authorShortText})
          </p>
          <p>
            {book.saleInfo.saleability === 'NOT_FOR_SALE'
              ? 'not for sale'
              : `${book.saleInfo.retailPrice?.amount} ${book.saleInfo.retailPrice?.currencyCode}`}
          </p>

          <RemoveFromCart id={book.id} />
        </div>
      </div>
    </li>
  ))
  return (
    <>
      <h1 className="text-lg font-bold">Cart</h1>
      {books.length === 0 && <p>No items in cart</p>}
      <ul className="grow overflow-y-scroll" style={{ height: '70vh' }}>
        {list}
      </ul>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total: {total}</p>
        <button
          onClick={() => {
            navigate('/checkout')
            closeCart()
          }}
          className="rounded bg-green-400 px-4 text-lg"
        >
          Go To Cart
        </button>
      </div>
    </>
  )
}
