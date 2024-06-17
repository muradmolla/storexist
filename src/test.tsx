import { render } from 'utils/storeTestUtils'
import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
