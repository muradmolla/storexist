import { act } from 'react'
import Counter from '.'
import { render, screen } from 'utils/storeTestUtils'
describe('<Counter />', () => {
  it('should render Counter', () => {
    const { container } = render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
    expect(screen.queryByText(/Increment By 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Decrement/i)).toBeInTheDocument()
    expect(screen.getByText(/Increment Async By 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Increment If Odd By 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Increment If Odd By 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Increment By 5/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should increment by 1', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
    act(() => {
      screen.getByText(/Increment By 1/i).click()
    })
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 1')
  })

  it('should decrement by 1', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
    act(() => {
      screen.getByText(/Decrement/i).click()
    })
    expect(screen.getByTestId('count')).toHaveTextContent('Count: -1')
  })

  it('should increment by 2', async () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0')
    act(() => {
      screen.getByText(/Increment Async By 2/i).click()
    })
    expect(await screen.findByText(/Count: 2/i)).toBeInTheDocument()
  })
})
