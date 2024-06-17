import Layout from 'components/Layout'
import { StrictMode } from 'react'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <StrictMode>
      <Layout>
        <Outlet />
      </Layout>
    </StrictMode>
  )
}
