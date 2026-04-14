import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
}

export default function UseFormStatus() {
    async function handleSubmit(formData) {
        console.log(formData)
        await new Promise((res, rej) => setTimeout(() => res("resolved"), 2000))
    }

    return (
        <div>
            {/* with onSubmit react wont give the pending state by default */}
            <form action={handleSubmit}>
                <SubmitButton />
            </form>
        </div>
    );
}