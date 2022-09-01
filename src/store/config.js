import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/loginData.js'

export default configureStore({
  reducer: {
    cart: cart.reducer
    // cart: cart.reducer,
  }
})