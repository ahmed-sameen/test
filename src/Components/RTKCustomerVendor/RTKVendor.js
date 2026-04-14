import { useState } from "react";
import { useAddVendorsMutation, useGetPeopleQuery } from "../../Utils/CustomerVendorApiSlice";

const RTKVendor = () => {
    const [name, setName] = useState("")
    const { data } = useGetPeopleQuery("vendor");
    const [addVendor, { }] = useAddVendorsMutation()

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

export default RTKVendor;