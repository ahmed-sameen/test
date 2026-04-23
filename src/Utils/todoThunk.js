import { createAsyncThunk } from "@reduxjs/toolkit";

const todoThunk = createAsyncThunk(
    "todoThunk",
    async (id) => {
        const response = await fetch("https://dummyjson.com/todos/" + id)
        return response.json();
    }
)

export default todoThunk