import { ReactNode } from 'react'
import logo from 'assets/logo.svg'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto">
      <div>
        <Link to="/">
          <img src={logo} className="mx-auto w-80" alt="logo" />
        </Link>
      </div>
      <div className="bg-slate-900 p-2 text-white">
        <SearchBar />
      </div>
      <div className="p-2 py-4">{children}</div>
    </div>
  )
}
