import { useState } from "react";

const Radio = () => {

    const [checkVal, setCheckVal] = useState()

    console.log(checkVal)

    return <div>
        <div>
            <label>odd</label>
            <input
                name="OE"
                value="odd"
                type="radio"
                checked={"odd" == checkVal}
                onChange={(e) => setCheckVal(e.target.value)} />
        </div>
        <div>
            <label>even</label>
            <input
                name="OE"
                value="even"
                type="radio"
                checked={'even' == checkVal}
                onChange={(e) => setCheckVal(e.target.value)} />
        </div>
    </div>
}

export default Radio;