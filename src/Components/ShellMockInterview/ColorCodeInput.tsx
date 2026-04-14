import React, { useRef, useState } from "react";

const ColorCodeInput = () => {

    const [color, setColor] = useState<string | undefined>("#808080")

    const inpRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setColor(inpRef?.current?.value)
    }
    return (
        <div style={{ backgroundColor: color }}>
            <form onSubmit={handleSubmit}>
                <input ref={inpRef} defaultValue={color} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )


}

export default ColorCodeInput;