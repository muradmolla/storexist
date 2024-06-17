import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Details, { loader as detailsLoader } from './Details'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'details/:bookid',
    element: <Details />,
    loader: detailsLoader,
    errorElement: <ErrorPage />
  }
])

export default router
