import { memo } from "react";

const ChildForUseCallback = memo(({ increase, decrease, reset }) => {
    console.log("child")
    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>

})

export default ChildForUseCallback;