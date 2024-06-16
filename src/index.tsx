import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { setupStore } from 'store'
import Layout from 'components/Layout'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={setupStore()}>
    <Layout>
      <App />
    </Layout>
  </Provider>
)
