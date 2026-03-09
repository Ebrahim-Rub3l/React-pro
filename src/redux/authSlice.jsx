import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authinfo: (state , action) =>{
        state.value = action.payload
    },
    logout: (state) => {
      state.value = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { authinfo , logout } = authSlice.actions

export default authSlice.reducer