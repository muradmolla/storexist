import { ReactNode } from 'react'
import logo from 'assets/logo.svg'
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto">
      <div>
        <img src={logo} className="mx-auto w-80" alt="logo" />
      </div>
      <div className="bg-slate-900 p-2 text-white">Menu</div>
      <div className="p-2 py-4">{children}</div>
    </div>
  )
}
