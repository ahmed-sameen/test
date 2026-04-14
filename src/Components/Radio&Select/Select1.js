import { useEffect, useState } from "react"

const Select1 = () => {

    const [selected, setSelected] = useState("")

    useEffect(() => { console.log(selected) }, [selected])

    return <div>
        <select onChange={(e) => setSelected(e.target.value)} value={selected}>
            <option value="default">default</option>
            <option value="odd">odd</option>
        </select>
    </div>
}

export default Select1