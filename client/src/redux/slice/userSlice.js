import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log("set - user ")
            console.log(action);
            state.value = action.payload
        },
        logout: (state) => {
            localStorage.clear()
            state.value = null
        }
    },
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer