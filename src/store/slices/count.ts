import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '..'

// dummy
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    setTimeout(() => {
      resolve({ data: amount })
    }, 500)
  })
}

export const incrementAsync = createAsyncThunk(
  'count/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    return response.data
  }
)

export interface CountState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CountState = {
  value: 0,
  status: 'idle'
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { increment, decrement, incrementByAmount } = countSlice.actions

export const selectCount = (state: RootState) => state.count.value

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 0) {
      dispatch(incrementByAmount(amount))
    }
  }

export default countSlice.reducer
