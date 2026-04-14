import { useMemo, useState } from "react";
import { findNthPrime } from "../../Utils/findPrime";
import Child from "./Child";

const UseMemo = () => {

    const [number, setNumber] = useState(1);
    const [theme, setTheme] = useState(true);

    const prime = useMemo(() => findNthPrime(number), [number])
    // const prime = findNthPrime(number)

    return (
        <div>
            {prime}
            <Child prime={prime} />
            <input value={number} onChange={(e) => setNumber(e.target.value)} />
            <div>{theme ? "light" : "dark"}</div>
            <button onClick={() => setTheme(prev => !prev)}>Toggle theme</button>
        </div>
    )
}

export default UseMemo;