import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { GoogleBook } from 'functions/GoogleBooksApi/googleTypes'
import GoogleBooksApi from 'functions/GoogleBooksApi'

export interface CartState {
  items: GoogleBook[]
  total: number
}

export const addBook = createAsyncThunk(
  'cart/add',
  async ({ id }: { id: string }) => {
    const response = await GoogleBooksApi.bookDetails(id)
    return response
  }
)

const initialState: CartState = {
  items: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      state.items = state.items.filter((item) => {
        const shouldBookStay = item.id !== action.payload.id
        if (!shouldBookStay && item.saleInfo.retailPrice)
          state.total -= item.saleInfo.retailPrice.amount
        return shouldBookStay
      })
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      if (state.items.some((item) => item.id === action.payload.id)) {
        return
      }
      if (action.payload.saleInfo.retailPrice)
        state.total += action.payload.saleInfo.retailPrice.amount
      state.items.push(action.payload)
    })
  }
})

export const { removeBook, clearCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotal = (state: RootState) => state.cart.total

export default cartSlice.reducer
