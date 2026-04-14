import React, { useState } from "react"

let themeObject: any = {
    light: {
        color: "black",
        backgroundColor: "white"
    },
    dark: {
        color: "white",
        backgroundColor: "black"
    }
}

const ThemeSelector = () => {
    const [theme, setTheme] = useState<string>("light")

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value)
    }
    return (
        <div style={themeObject[theme]}>
            <div>
                hello
            </div>
            <select onChange={handleChange} value={theme}>
                <option value={"light"}>light</option>
                <option value={"dark"}>dark</option>
            </select>
        </div>
    )

}

export default ThemeSelector;