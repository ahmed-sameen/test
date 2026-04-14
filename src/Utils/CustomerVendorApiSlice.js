import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const customerVendorApiSlice = createApi({
//     reducerPath: "CustomerVendorApiSlice",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
//     tagTypes: ["People"],
//     endpoints: (builder) => ({
//         getPeople: builder.query({
//             query: (role) => `people?role=${role}`,
//             providesTags: (result, error, arg) => [{ type: "People", id: arg }]
//         }),
//         addCustomers: builder.mutation({
//             query: (body) => ({
//                 url: "people",
//                 body,
//                 method: "post"
//             }),
//             invalidatesTags: [{ type: "People", id: "customer" }]
//         }),
//         addVendors: builder.mutation({
//             query: (body) => ({
//                 url: "people",
//                 body,
//                 method: "post"
//             }),
//             invalidatesTags: [{ type: "People", id: "vendor" }]
//         })
//     })
// })

// export const { useGetPeopleQuery, useAddCustomersMutation, useAddVendorsMutation } = customerVendorApiSlice








export const customerVendorApiSlice = createApi({
    reducerPath: "customerVendorApiSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    tagTypes: ["People"],
    endpoints: (builder) => ({
        getPeople: builder.query({
            query: (role) => `people?role=${role}`,
            providesTags: (result, error, arg) => [{ type: "People", id: arg }]
        }),
        addVendors: builder.mutation({
            query: (body) => ({
                url: "people",
                body,
                method: "post"
            }),
            invalidatesTags: [{ type: "People", id: "vendor" }]
        }),
        addCustomers: builder.mutation({
            query: (body) => ({
                url: "people",
                body,
                method: "post"
            }),
            invalidatesTags: [{ type: "People", id: "customer" }]
        })
    })
})

export const { useAddCustomersMutation, useGetPeopleQuery, useAddVendorsMutation } = customerVendorApiSlice