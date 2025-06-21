import { createSlice } from "@reduxjs/toolkit";
import userData from "../data/UserData";



const userSlice = createSlice({
    name: "users",
    initialState: {
        data: userData,
        userEmail: ""
    },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.data = state.data.filter((user) =>
                user.id !== action.payload.id
            )
        },
        searchUser: (state, action) => {
            state.userEmail = action.payload
        },

    }
})

export const { addUser, deleteUser, searchUser } = userSlice.actions

export default userSlice.reducer