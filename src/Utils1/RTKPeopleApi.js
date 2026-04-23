import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RTKPeopleApi = createApi({
    reducerPath: "RTKPeopleApi",
    baseQuery: fetchBaseQuery({ baseUri: "http://localhost:3001/" }),
    tagTypes: ["People"],
    endpoints: (build) => ({
        getPeople: build.query({
            query: (role) => `people?role=${role}`,
            providesTags: (result, error, arg) => [{ type: "People", id: arg }]
        }),
        addCustomer: build.mutation({
            query: (body) => ({
                url: "people",
                body,
                method: post
            }),
            invalidatesTags: [{ type: "People", id: "customer" }]
        })
    })
})

export const { useGetPeopleQuery, useAddCustomerMutation } = RTKPeopleApi