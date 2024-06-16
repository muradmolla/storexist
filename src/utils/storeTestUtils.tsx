import { FC, ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { AppStore, RootState, setupStore } from 'store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}
const customRender = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    store,
    ...render(ui, { wrapper: AllTheProviders, ...renderOptions })
  }
}

export * from '@testing-library/react'
export { customRender as render }
