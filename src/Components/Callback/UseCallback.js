import { useCallback, useState } from "react";
import ChildForUseCallback from "./ChildForUseCallback";

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [shouldThrow, setShouldThrow] = useState(false);


    const increase = useCallback(function increase() {
        setNumber(prev => prev + 1)
    }, [])

    const decrease = useCallback(() => {
        setNumber(prev => prev - 1)
    }, [])

    const reset = useCallback(() => {
        setNumber(0)
    }, [])

     if (shouldThrow) {
        throw new Error("Simulated render error in UseCallback");
    }


    return <div>
        <div>{number}</div>
        <button onClick={() => setShouldThrow(true)}>
                Trigger Error
            </button>

        <ChildForUseCallback increase={increase} decrease={decrease} reset={reset} />
    </div>
}
export default UseCallback; 