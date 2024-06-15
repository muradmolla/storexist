import Counter from 'components/Counter'
import { render, screen } from 'utils/storeTestUtils'

describe('storeTestUtil', () => {
  it('counter should reach store', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
  })
})
