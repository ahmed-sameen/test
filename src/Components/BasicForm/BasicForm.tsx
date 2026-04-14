import { useEffect, useState } from "react"
import UserTable from "./UserTable"

type FormData = {
    name: string,
    email: string,
    password: string
}

type FormError = {
    nameError?: string,
    emailError?: string,
    passwordError?: string
}

const BasicForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: ""
    })

    const [formError, setFormError] = useState<FormError>({
        nameError: "",
        emailError: "",
        passwordError: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.id, e.target.value, e.target.name)
        const { name, value } = e.target;
        setFormData(prev => { return { ...prev, [name]: value } })
        // Think of [name] as saying: “Look up the variable name and use its value as the key,” instead of just writing "name" literally everytime
    }

    const validateForm = () => {
        let errors: FormError = {}
        if (formData.name.length == 0) {
            errors["nameError"] = "name required"
        }
        if (!formData.email.includes("@")) {
            errors["emailError"] = "invalid email"
        }
        if (formData.password.length == 0) {
            errors["passwordError"] = "invalid password"
        }
        return errors;
    }


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validateFormErrors = validateForm()
        if (Object.keys(validateFormErrors).length > 0) {
            setFormError(validateFormErrors)
            console.log(validateFormErrors)
        }
        else {
            setFormError({})
            console.log("submitted")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        // give name mandatory, keep second option as Id, for using it in onChange method
                        id="name"
                        name="name"
                        type="text"
                        onChange={(e) => handleChange(e)}
                        value={formData.name}
                    />
                    {formError.nameError && (<div>{formError.nameError}</div>)}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        // type="email"
                        onChange={(e) => handleChange(e)}
                        value={formData.email}
                    />
                    {formError.emailError && (<div>{formError.emailError}</div>)}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        value={formData.password}
                    />
                    {formError.passwordError && (<div>{formError.passwordError}</div>)}
                </div>
                <button type="submit">Submit</button>
            </form>
            <UserTable />
        </div>
    )
}
export default BasicForm;


