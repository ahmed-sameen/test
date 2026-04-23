import { useState } from "react";
import { useAddVendorMutation, useGetPeopleQuery } from "../../Utils/RTKCustomerVendorApi";

const RTKVendorAgain = () => {
    const [name, setName] = useState("")
    const { data } = useGetPeopleQuery("vendor");
    const [addVendor, { }] = useAddVendorMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        addVendor({ name, role: "vendor" })
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

export default RTKVendorAgain;