import { createSlice } from "@reduxjs/toolkit";
import todoThunk from "./todoThunk";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        loading: false,
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(todoThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(todoThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.todos.push(action.payload)
            })
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer;