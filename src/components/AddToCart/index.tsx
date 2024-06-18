import { useAppDispatch } from 'store/hooks'
import { addBook } from 'store/slices/cart'

export default function AddToCart({ id }: { id: string }) {
  const dispatch = useAppDispatch()
  return (
    <button
      onClick={() => dispatch(addBook({ id }))}
      className="rounded bg-green-400 px-2"
    >
      Add to Cart
    </button>
  )
}
