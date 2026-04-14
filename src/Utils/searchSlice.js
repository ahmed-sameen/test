import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {},
    reducers: {
        addSearches: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { addSearches } = searchSlice.actions;
export default searchSlice.reducer;