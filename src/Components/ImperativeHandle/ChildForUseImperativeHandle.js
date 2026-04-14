import { forwardRef, useImperativeHandle, useRef } from "react";

const ChildForUseImperativeHandle = forwardRef((props, ref) => {

    const inpRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focusIt: () => inpRef.current.focus()
        }
    })

    return <input ref={inpRef} />
})

export default ChildForUseImperativeHandle;