import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import count from './slices/count'

export const store = configureStore({
  reducer: {
    count: count
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
