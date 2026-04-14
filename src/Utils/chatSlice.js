import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        chats: []
    },
    reducers: {
        addChat: (state, action) => {
            if (state.chats.length > 10) state.chats.shift()
            state.chats.push(action.payload)
        }
    }
})

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;