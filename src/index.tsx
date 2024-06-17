import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import { setupStore } from 'store'
import { RouterProvider } from 'react-router-dom'
import router from 'routes'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={setupStore()}>
    <RouterProvider router={router} />
  </Provider>
)
