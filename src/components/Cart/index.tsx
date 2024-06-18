import { useEffect, useRef, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CartContent from './CartContent'
import { classNames } from 'utils'

export default function Cart() {
  const [open, setOpen] = useState(false)
  const closeCart = () => setOpen(false)

  const cartWrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const ref = cartWrapperRef.current
      if (ref && !ref.contains(e.target as Node) && open) setOpen(false)
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [open])
  return (
    <div ref={cartWrapperRef}>
      <button className="hidden md:block" onClick={() => setOpen(!open)}>
        <FaShoppingCart />
      </button>
      <div
        className={classNames(
          'flex grow flex-col md:absolute md:right-1 md:top-16 md:bg-slate-200 md:p-3',
          open ? '' : 'md:hidden'
        )}
      >
        <CartContent closeCart={closeCart} />
      </div>
    </div>
  )
}
