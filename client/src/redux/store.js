import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./slice/userSlice"
import cartSlice from './slice/cartSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        cart_items: cartSlice
    },
})