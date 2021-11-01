import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {}
    },
    reducers: {
        login(state, action) {
            state.data = {
                id: action.payload.id,
                login: action.payload.login
            }
        }
    },
})

export const { login } = userSlice.actions;
export default userSlice.reducer;