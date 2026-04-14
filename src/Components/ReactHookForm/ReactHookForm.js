import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const {
        watch,
        formState: { errors, isValid },
        handleSubmit,
        register
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "sameen",
            age: 28
        }
    })

    const onSubmit = (data) => console.log(data)

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input
                    type='text'
                    {...register("name", { required: "required" })}
                />
            </div>
            <div>
                <label>Age</label>
                <input
                    type='number'
                    {...register("age", {
                        min: {
                            value: 18,
                            message: "above 18 only"
                        }
                    })}
                />
            </div>
            <button disabled={!isValid}>submit</button>
        </form>
    </div>
}
export default ReactHookForm