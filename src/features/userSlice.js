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
        updateUser: (state, action) => {
            const { id, updatedData } = action.payload;
            const userIndex = state.data.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state.data[userIndex] = { ...state.data[userIndex], ...updatedData };
            }
        },
        searchUser: (state, action) => {
            state.userEmail = action.payload
        },


    }
})

export const { addUser, deleteUser, updateUser, searchUser } = userSlice.actions

export default userSlice.reducer