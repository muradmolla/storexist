import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)

    expect(screen.getByText(/Test/i)).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })
})
