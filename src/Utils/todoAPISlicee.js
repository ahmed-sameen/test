import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoAPISlice = createApi({
    reducerPath: "todoAPISlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/todos/" }),
    endpoints: (builder) => ({
        getTodoData: builder.query({
            query: (id) => `${id}`
        })
    })
})

export const { useLazyGetTodoDataQuery, useGetTodoDataQuery } = todoAPISlice;