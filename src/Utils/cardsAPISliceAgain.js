import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsAPISliceAgain = createApi({
    reducerPath: "cardsAPISliceAgain",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ["Card"],
    endpoints: (build) => ({
        getCards: build.query({
            query: () => "cards",
            providestags: ["Card"]
        }),
        addCard: build.mutation({
            query: (body) => ({
                url: "cards",
                method: "post",
                body
            }),
            invalidatesTags:["Card"]
        })
    })
})

export const { useGetCardsQuery, useAddCardMutation } = cardsAPISliceAgain;
