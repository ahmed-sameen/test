import react, { useOptimistic, useRef, useState } from "react";
import { useForm, useFormState } from "react-hook-form";

let theme: any = {
    light: {
        color: "black",
        backgroundColor: "white"
    },
    dark: {
        color: "white",
        backgroundColor: "black"
    }
}
export default function Parent() {

    const [colorTheme, setColorTheme] = useState<string>("light")
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setColorTheme(e.target.value)
    }

    return <div style={theme[colorTheme]}>
        {/* <form onSubmit={handleSubmit}>
            <input ref={inpRef} defaultValue={color} />
            <button type="submit">submit</button>
        </form> */}
        <div>hi</div>
        <select value={colorTheme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">dark</option>
        </select>
    </div>
}