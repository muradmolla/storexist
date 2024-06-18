import { ReactNode } from 'react'
import Menu from './Menu'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="sticky top-0 w-full">
        <div className="w-full">
          <Menu />
        </div>
      </div>
      <div className="container mx-auto p-2 py-4">{children}</div>
    </div>
  )
}
