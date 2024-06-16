import Counter from 'components/test/Counter'
import { render, screen } from 'utils/storeTestUtils'
import { setupStore } from 'store'
import { decrement, incrementByAmount } from 'store/slices/count'

describe('storeTestUtil', () => {
  it('counter should reach store', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
  })
  describe('Counter slice', () => {
    it('should should increment by 3', async () => {
      const store = setupStore()
      store.dispatch(incrementByAmount(3))

      render(<Counter />, { store })
      expect(await screen.findByText(/Count: 3/i)).toBeInTheDocument()
    })

    it('should decrement', () => {
      const store = setupStore()
      store.dispatch(decrement())

      render(<Counter />, { store })
      expect(screen.getByTestId('count')).toHaveTextContent('Count: -1')
    })
  })
})
