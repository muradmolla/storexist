import GoogleBooksApi from 'functions/GoogleBooksApi'
import { setupStore } from 'store'
import { addBook, removeBook, selectCartItems, selectCartTotal } from './cart'

async function setupBook() {
  const store = setupStore()
  const books = await GoogleBooksApi.searchBooks('javascript')
  const book = books.items[0]
  return { store, book }
}

describe('Cart Slice', () => {
  it('should add item to cart', async () => {
    const { store, book } = await setupBook()
    await store.dispatch(addBook({ id: book.id }))
    const state = store.getState()
    const items = selectCartItems(state)
    const total = selectCartTotal(state)
    expect(items[0].id).toBe(book.id)
    expect(total).toBe(book.saleInfo.retailPrice?.amount)
  })

  it('should remove item from cart', async () => {
    const { store, book } = await setupBook()
    await store.dispatch(addBook({ id: book.id }))
    store.dispatch(removeBook({ id: book.id }))
    const state = store.getState()
    const items = selectCartItems(state)
    const total = selectCartTotal(state)
    expect(items.length).toBe(0)
    expect(total).toBe(0)
  })
})
