import { forwardRef } from "react";

const ChildForForwardRef = forwardRef((props, ref) => {
    return <input ref={ref} />
})

export default ChildForForwardRef;