import { ActionFunction } from 'react-router-dom'

interface CheckoutFormData {
  books: string[]
  name: string
  address: string
  city: string
}

async function mockApiRequest(data: CheckoutFormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log(data)
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const books = formData.get('books')
  const name = formData.get('fullname')
  const address = formData.get('address')
  const city = formData.get('city')
  if (!books || !name || !address || !city) {
    return { status: 400, error: 'Missing required fields' }
  }
  if (
    !Array.isArray(books) ||
    typeof name !== 'string' ||
    typeof address !== 'string' ||
    typeof city !== 'string'
  ) {
    return { status: 400, error: 'Invalid data' }
  }
  await mockApiRequest({ books, name, address, city })

  return { formData }
}

export default function FinalCheckout() {
  return <h1>Your payment is successful</h1>
}
