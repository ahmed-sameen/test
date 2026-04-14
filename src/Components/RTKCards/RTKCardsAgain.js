// useState
import { useState } from "react";
import { useAddCardMutation, useGetCardsQuery, useRemoveCardMutation } from "../../Utils/cardsAPISliceAgain";


const RTKCardsAgain = () => {

    const { data, error } = useGetCardsQuery()
    const [name, setName] = useState("");
    const [addCard, { isLoading, isSuccess, isError, isFetching }] = useAddCardMutation();
    const [removeCard] = useRemoveCardMutation()

    console.log(data,"hi")

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            // Trigger the mutation
            await addCard({ name })
            setName(""); // reset form
        } catch (err) {
            console.error("Failed to add card:", err);
        }
    };



    return <div>
        {data && data?.map(each => {
            return <div key={each.id}>{each.name}
                <button onClick={() => removeCard(each.id)}>Remove</button>
            </div>
        })}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                placeholder="Enter card name"
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Card"}
            </button>

            {isFetching && <p>✅ Adding!</p>}
        </form>

    </div>
}

export default RTKCardsAgain;