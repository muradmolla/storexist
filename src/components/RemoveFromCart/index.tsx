import { useAppDispatch } from 'store/hooks'
import { removeBook } from 'store/slices/cart'

export default function RemoveFromCart({ id }: { id: string }) {
  const dispatch = useAppDispatch()

  return (
    <button
      onClick={() => dispatch(removeBook({ id }))}
      className="rounded bg-red-400 px-4"
    >
      Remove
    </button>
  )
}
