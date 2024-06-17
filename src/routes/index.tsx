import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Details, { loader as detailsLoader } from './Details'
import ErrorPage from './ErrorPage'
import App from 'App'
import Search, { loader as searchLoader } from './Search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'details/:bookid',
        element: <Details />,
        loader: detailsLoader,
        errorElement: <ErrorPage />
      },
      {
        path: 'search/:query',
        element: <Search />,
        loader: searchLoader
      }
    ]
  }
])

export default router
