import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import minifigReducer from '../slices/minifigSlice'

export const store = configureStore({
  reducer: { minifigReducer: minifigReducer },
  middleware: [thunk]
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
