import { useState } from "react";
import { useAddCustomersMutation, useGetPeopleQuery } from "../../Utils/CustomerVendorApiSlice";

const RTKCustomer = () => {
    const [name, setName] = useState("")
    const { data } = useGetPeopleQuery("customer");
    const [addCustomer, { }] = useAddCustomersMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustomer({ name, role: "customer" })
        setName("")
    }

    return <div>
        {data && data?.map(each => <div key={each.id}>{each.name}</div>)}
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Add person</button>
            </form>
        </div>
    </div>


}

export default RTKCustomer