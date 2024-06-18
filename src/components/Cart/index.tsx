import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CartContent from './CartContent'
import { classNames } from 'utils'

export default function Cart() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button className="hidden md:block" onClick={() => setOpen(!open)}>
        <FaShoppingCart />
      </button>
      <div
        className={classNames(
          'flex grow flex-col md:absolute md:right-1 md:top-16 md:bg-slate-200 md:p-3',
          open ? '' : 'md:hidden'
        )}
      >
        <CartContent />
      </div>
    </div>
  )
}
