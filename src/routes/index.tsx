import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Details, { loader as detailsLoader } from './Details'
import ErrorPage from './ErrorPage'
import App from 'App'
import Search, { loader as searchLoader } from './Search'
import NotFound from './NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: 'search',
        element: <Search />,
        loader: searchLoader,
        errorElement: <ErrorPage />,
        children: [
          {
            path: ':query'
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
