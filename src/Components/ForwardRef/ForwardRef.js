import { useRef } from "react"
import ChildForForwardRef from "./ChildForForwardRef";

const ForwardRef = () => {

    const inpRef = useRef();

    return <div>
        <button onClick={() => console.log(inpRef.current.value)}>get ref value from child</button>
        <ChildForForwardRef ref={inpRef} />
    </div>
}

export default ForwardRef;