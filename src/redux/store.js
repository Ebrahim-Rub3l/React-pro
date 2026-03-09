import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice.jsx'
import authReducer from './authSlice.jsx'
export const store = configureStore({
  reducer: {
    cart:cartReducer ,
    auth:authReducer ,
  },
})