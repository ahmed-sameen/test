import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const cardsAPISliceAgain = createApi({
    reducerPath: "cardsAPISliceAgain",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ["Cards"],
    endpoints: (builder) => ({
        getCards: builder.query({
            query: () => "cards",
            providesTags: ["Cards"]
        }),
        addCard: builder.mutation({
            query: (body) => ({
                url: "cards",
                body,
                method: "post"
            }),
            invalidatesTags: ["Cards"]
        }),
        removeCard: builder.mutation({
            query: (body) => ({
                url: `cards/${body}`,
                method: "delete"
            }),
            invalidatesTags: ["Cards"]
        })
    })
})

export const { useGetCardsQuery, useAddCardMutation, useRemoveCardMutation } = cardsAPISliceAgain
// reducerPath: "cardsAPISliceAgain",
// baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
// tagTypes: ["Cards"],
// endpoints: (builder) => {
//     return {
//         getCards: builder.query({
//             query: () => "cards",
//             providesTags: ["Cards"]
//         }),
//         addCard: builder.mutation({
//             query: (body) => ({
//                 url: "cards",
//                 body,
//                 method: "post"
//             }),
//             invalidatesTags: ["Cards"]
//         }),
//         removeCard: builder.mutation({
//             query: (body) => ({
//                 url: `cards/${body}`,
//                 method: "delete"
//             }),
//             invalidatesTags: ["Cards"]
//         })
//     }
// }