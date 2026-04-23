const RTKCustomerVendorApi = crateApi({
    reducerPath: "RTKCustomerVendorApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
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
                method: "post"
            }),
            invalidatesTags: [{ type: "People", id: "customer" }]
        }),
        addVendor: build.mutation({
            query: (body) => ({
                url: "people",
                body,
                method: "post"
            }),
            invalidatesTags: [{ type: "People", id: "vendor" }]
        })
    })
})