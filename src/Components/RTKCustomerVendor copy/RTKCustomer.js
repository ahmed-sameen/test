import { useState } from "react";
import { useAddCustomerMutation, useGetPeopleQuery } from "../../Utils/RTKCustomerVendorApi";


const RTKCustomerAgain = () => {
    const [name, setName] = useState("")
    const { data } = useGetPeopleQuery("customer");
    const [addCustomer, { }] = useAddCustomerMutation()

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

export default RTKCustomerAgain