import { useAppSelector } from 'store/hooks'
import { selectCartItems, selectCartTotal } from 'store/slices/cart'

export default function CartContent() {
  const books = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)
  const list = books.map((book) => (
    <li key={book.id}>
      <p>{book.volumeInfo.title}</p>
      <p>{book.saleInfo.retailPrice?.amount}</p>
    </li>
  ))
  return (
    <div>
      <h1 className="text-lg font-bold">Cart</h1>
      <ul>{list}</ul>
      <p>Total: {total}</p>
    </div>
  )
}