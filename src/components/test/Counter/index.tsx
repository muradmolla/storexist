import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  selectCount,
  increment,
  decrement,
  incrementAsync,
  incrementIfOdd,
  incrementByAmount
} from 'store/slices/count'

export default function Counter() {
  const count = useAppSelector(selectCount)

  const dispatch = useAppDispatch()

  return (
    <div>
      <h1 data-testid="count">Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment By 1</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(2))}>
        Increment Async By 2
      </button>
      <button onClick={() => dispatch(incrementIfOdd(3))}>
        Increment If Odd By 3
      </button>
      <button onClick={() => dispatch(incrementIfOdd(2))}>
        Increment If Odd By 2
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment By 5
      </button>
    </div>
  )
}
