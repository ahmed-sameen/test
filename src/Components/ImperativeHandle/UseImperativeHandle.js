import { useRef } from "react";
import ChildForUseImperativeHandle from "./ChildForUseImperativeHandle";

const UseImperativeHandle = () => {

    const childRef = useRef();

    return <div>
        <button onClick={() => childRef.current.focusIt()}>Focus input in child</button>
        <ChildForUseImperativeHandle ref={childRef} />
    </div>
}

export default UseImperativeHandle;