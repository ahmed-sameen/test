import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const RTKCardsApi = createApi({
    reducerPath: "RTKTodoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["Cards"],
    endpoints: (build) => ({
        fetchCards: build.query({
            query: () => "/cards",
            providesTags: ["Cards"]
        }),
        removeCard: build.mutation({
            query: (body) => ({
                url: `/cards/${body}`,
                method: "delete",
            }),
            invalidatesTags: ["Cards"]
        })
    })
})

export const { useFetchCardsQuery, useRemoveCardMutation } = RTKCardsApi