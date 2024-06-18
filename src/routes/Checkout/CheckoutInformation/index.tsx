import { GoogleBook } from 'functions/GoogleBooksApi/googleTypes'
import { FormEvent } from 'react'
import { Form, useLocation } from 'react-router-dom'

export default function CheckoutInformation() {
  // Using useLocation instead of store because after clicking checkout button, changes to the cart should be ignored
  const locationState = useLocation().state
  if (!locationState || !Object.hasOwn(locationState, 'books'))
    return <h1>No books to checkout</h1>

  const books = locationState.books
  const total = books.reduce((acc: number, book: GoogleBook) => {
    return (
      acc +
      (book.saleInfo && book.saleInfo.retailPrice
        ? book.saleInfo.retailPrice.amount
        : 0)
    )
  }, 0)
  const bookIds = books.map((book: GoogleBook) => book.id)

  const validateSubmission = (event: FormEvent) => {
    const form = event.target as HTMLFormElement
    const name = form.fullname
    const address = form.address.value
    const city = form.city.value
    const books = form.books.value
    console.log(name, address, city, books)
    if (!name || !address || !city || !books) {
      event.preventDefault()
    }
  }
  return (
    <div>
      <Form
        onSubmit={validateSubmission}
        method="POST"
        action="/checkout/final"
        id="checkout-form"
      >
        <div className="flex flex-col md:flex-row">
          <div className="grow">
            <h1>Address Information</h1>
            <input type="hidden" name="books" value={bookIds} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2"
              name="fullname"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border p-2"
              name="address"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border p-2"
              name="city"
              required
            />
          </div>
          <div className="ml-4 mt-4 md:w-60">
            <div className="border p-2">
              <h1 className="text-center text-2xl font-bold">Cart</h1>
              <p>
                <span className="font-bold">Total:</span> {total}
              </p>
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 p-2 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}
