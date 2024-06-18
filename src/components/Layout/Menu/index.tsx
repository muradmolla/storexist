import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import logo from 'assets/logo.svg'
import { classNames } from 'utils'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import Cart from 'components/Cart'

export default function Menu() {
  const [open, setOpen] = useState(false)
  const openClasses = 'h-screen md:h-auto'
  const closedClasses = ''
  const defaultClasses = 'bg-slate-300'
  return (
    <div
      className={classNames(defaultClasses, open ? openClasses : closedClasses)}
    >
      <div className="container mx-auto flex h-full flex-col items-stretch px-4 pb-4 md:flex-row md:pb-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} className="mx-auto w-60" alt="logo" />
          </Link>
          <button className="mr-4 md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoIosClose size="2em" /> : <IoIosMenu size="1.5em" />}
          </button>
        </div>
        <div
          className={classNames(
            'grow md:flex flex-col md:flex-row md:w-full md:justify-between items-center',
            open ? 'flex' : 'hidden'
          )}
        >
          <div className="w-full md:ml-32">
            <SearchBar />
          </div>
          <Cart />
        </div>
      </div>
    </div>
  )
}
