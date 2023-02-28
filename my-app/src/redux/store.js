import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slice/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: CounterSlice
    },
})