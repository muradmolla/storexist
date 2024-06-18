import { ActionFunction } from 'react-router-dom'
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const books = formData.get('books')
  const name = formData.get('fullname')
  const address = formData.get('address')
  const city = formData.get('city')
  console.log(books, name, address, city)

  return { formData }
}

export default function FinalCheckout() {
  return <h1>Your payment is successful</h1>
}
