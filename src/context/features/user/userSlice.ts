import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserState {
    token: string | null,
    isAuthenticated: boolean,
    darkMode: boolean,
    dp: string | null
}

const initialState: UserState = {
    token: null,
    isAuthenticated: false,
    darkMode: false,
    dp: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            state.isAuthenticated = true
        },
        removeToken: (state) => {
            state.token = null
            state.isAuthenticated = false
        },
        turnOnDarkMode: (state) => {
            state.darkMode = !state.darkMode
        },
        addDp: (state, action: PayloadAction<string>) => {
            state.dp = action.payload
        },
        removeDp: (state) => {
            state.dp = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateToken, removeToken, turnOnDarkMode, addDp, removeDp } = userSlice.actions

export default userSlice.reducer