import { FaShoppingCart } from 'react-icons/fa'
import CartContent from './CartContent'

export default function Cart() {
  return (
    <>
      <button className="hidden md:block">
        <FaShoppingCart />
      </button>
      <div className="md:hidden">
        <CartContent />
      </div>
    </>
  )
}
