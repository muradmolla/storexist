import { render } from 'utils/storeTestUtils'
import Layout from '.'

describe('Layout', () => {
  it('should render the layout', () => {
    const { container } = render(<Layout>Test</Layout>)
    expect(container.firstChild).toHaveClass('container mx-auto')
  })
})
